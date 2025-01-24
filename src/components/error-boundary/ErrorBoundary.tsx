 "use client"

import * as React from "react"

type ErrorBoundaryProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optionally log to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    const { hasError, error } = this.state
    const { fallback, children } = this.props

    if (hasError) {
      // If you provided a `fallback` prop, render that;
      // otherwise show a generic message.
      if (fallback) return <>{fallback}</>

      return (
        <div className="p-4">
          <h2 className="text-lg font-semibold text-red-500">
            Something went wrong.
          </h2>
          {error && (
            <pre className="mt-2 p-2 bg-red-100 text-red-600 rounded-md">
              {error.message}
            </pre>
          )}
        </div>
      )
    }

    return children
  }
}
