import { useState, useCallback } from 'react'
import '@/bookcall.css'

function BookCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    occupation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqe3h-H7hyZRFtcdY81UFpi-mPNyLmYbXGmz63RlTPJrmhsT8e4hf0tnl1ay8HZr0zig/exec'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        contactNumber: formData.contactNumber.trim(),
        occupation: (formData.occupation || '').trim()
      }

      // Direct submission to Google Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // With no-cors mode, we can't read the response, so we assume success
      setShowSuccess(true)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', contactNumber: '', occupation: '' })

      setTimeout(() => {
        setShowSuccess(false)
        setSubmitStatus('')
      }, 4000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.contactNumber.trim() !== ''

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full">
        <div className="rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle background decoration */}


          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <div className="w-5 h-5 bg-black rounded-sm"></div>
              </div>
              <span className="font-bold text-3xl text-gray-900">Mentorque</span>
            </div>
            <p className="text-lg text-gray-600 font-medium">Land Interviews Faster</p>
            <div className="mt-3 h-1 w-16 bg-black rounded-full mx-auto"></div>
          </div>

          {/* Form */}
          <div className="space-y-6 relative z-10">
            {/* Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white hover:border-gray-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email ID *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white hover:border-gray-300"
                placeholder="Enter your email address"
              />
            </div>

            {/* Contact Number */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white hover:border-gray-300"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Occupation */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white hover:border-gray-300"
                placeholder="Enter your occupation (optional)"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:ring-4 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center relative overflow-hidden"
              >
                {/* Background Progress Bar */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-90 animate-pulse">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                )}
                
                {/* Animated Progress Wave */}
                {isSubmitting && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-green-400 to-green-600 animate-wave opacity-80"></div>
                  </div>
                )}
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      {/* Fancy Spinner */}
                      <div className="relative mr-3">
                        <div className="w-5 h-5 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <span className="font-medium">Opening doors...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="rounded-2xl bg-white p-8 mx-4 max-w-sm w-full shadow-2xl transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Mentorque. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setShowSuccess(false)
                    setSubmitStatus('')
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-wave {
          animation: wave 1.5s infinite;
        }
      `}</style>
    </div>
  )
}

export default BookCall