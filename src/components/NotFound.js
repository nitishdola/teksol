import React, {useEffect} from 'react'

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="not-found mt-7 p-3">
        <h1 className="display-1 text-center">404 Page Not Found</h1>
    </div>
  )
}
