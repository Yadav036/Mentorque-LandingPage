import { useState, useCallback, useMemo } from 'react'
import '@/bookcall.css'


// Constants moved outside component to prevent recreation
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqe3h-H7hyZRFtcdY81UFpi-mPNyLmYbXGmz63RlTPJrmhsT8e4hf0tnl1ay8HZr0zig/exec'
const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  contactNumber: '',
  occupation: ''
}

// Validation rules
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validatePhone = (phone) => /^[\d\s\-\+\(\)]{10,}$/.test(phone)

function BookCall() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  // Memoized validation to prevent recalculation on every render
  const isFormValid = useMemo(() => {
    const { name, email, contactNumber } = formData
    return (
      name.trim().length >= 2 &&
      validateEmail(email.trim()) &&
      validatePhone(contactNumber.trim())
    )
  }, [formData])

  // Debounced validation for better UX
  const validateField = useCallback((name, value) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else {
          delete newErrors.name
        }
        break
      case 'email':
        if (!validateEmail(value.trim())) {
          newErrors.email = 'Please enter a valid email'
        } else {
          delete newErrors.email
        }
        break
      case 'contactNumber':
        if (!validatePhone(value.trim())) {
          newErrors.contactNumber = 'Please enter a valid phone number'
        } else {
          delete newErrors.contactNumber
        }
        break
    }
    
    setErrors(newErrors)
  }, [errors])

  // Optimized change handler with validation
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Validate field if it has been touched
    if (value.trim().length > 0 || errors[name]) {
      validateField(name, value)
    }
  }, [validateField, errors])

  // Optimized submit handler with better error handling
  const handleSubmit = useCallback(async () => {
    if (!isFormValid || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        contactNumber: formData.contactNumber.trim(),
        occupation: formData.occupation.trim()
      }

      // Using AbortController for request timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

      void fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      setTimeout(() => {
  setShowSuccess(true)
  setSubmitStatus('success')
}, 2000) 
      setFormData(INITIAL_FORM_DATA)
      setErrors({})

      // Auto-hide success modal
      setTimeout(() => {
        setShowSuccess(false)
        setSubmitStatus('')
      }, 6000)

    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, isFormValid, isSubmitting])

  // Memoized close success handler
  const handleCloseSuccess = useCallback(() => {
    setShowSuccess(false)
    setSubmitStatus('')
  }, [])

  // Memoized input class names to prevent recalculation
  const getInputClassName = useCallback((fieldName) => {
    const baseClass = "w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white"
    const hasError = errors[fieldName]
    
    if (hasError) {
      return `${baseClass} border-red-300 focus:border-red-400 hover:border-red-400`
    }
    return `${baseClass} border-gray-200 focus:border-gray-400 hover:border-gray-300`
  }, [errors])

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="rounded-2xl shadow-2xl p-8 relative overflow-hidden bg-slate-200">
          {/* Header - Optimized structure */}
          <header className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <div className="w-5 h-5 bg-black rounded-sm"></div>
              </div>
              <h1 className="font-bold text-3xl text-gray-900">Mentorque</h1>
            </div>
            <p className="text-lg text-gray-600 font-medium">Land Interviews Faster</p>
            <div className="mt-3 h-1 w-16 bg-black rounded-full mx-auto"></div>
          </header>

          {/* Form with optimized validation */}
          <div className="space-y-6 relative z-10">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={getInputClassName('name')}
                placeholder="Enter your full name"
                autoComplete="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email ID *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName('email')}
                placeholder="Enter your email address"
                autoComplete="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Contact Number Field */}
            <div className="group">
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                id="contactNumber"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={getInputClassName('contactNumber')}
                placeholder="Enter your contact number"
                autoComplete="tel"
                aria-invalid={errors.contactNumber ? 'true' : 'false'}
                aria-describedby={errors.contactNumber ? 'contact-error' : undefined}
              />
              {errors.contactNumber && (
                <p id="contact-error" className="mt-1 text-sm text-red-600">{errors.contactNumber}</p>
              )}
            </div>

            {/* Occupation Field */}
            <div className="group">
              <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={getInputClassName('occupation')}
                placeholder="Enter your occupation (optional)"
                autoComplete="organization-title"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:ring-4 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center relative overflow-hidden"
                aria-label={isSubmitting ? "Submitting application" : "Submit application"}
              >
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-90">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                )}
                
                <div className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <div className="relative mr-3">
                        <div className="w-5 h-5 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <span className="font-medium">Opening doors...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Success Modal - Optimized with better accessibility */}
        {showSuccess && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            <div className="rounded-2xl bg-white p-8 mx-4 max-w-sm w-full shadow-2xl transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4" aria-hidden="true">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 id="success-title" className="text-xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Mentorque. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={handleCloseSuccess}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
            <p className="text-red-700 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookCall