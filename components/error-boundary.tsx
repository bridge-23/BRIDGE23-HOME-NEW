'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './ui/button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Oops, something went wrong!</h2>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-black text-white hover:bg-gray-900"
          >
            Refresh Page
          </Button>
        </div>
      )
    }

    return this.props.children
  }
} 