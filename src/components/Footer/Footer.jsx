import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Justish. All rights reserved.
      </p>
    </div>
  )
}
