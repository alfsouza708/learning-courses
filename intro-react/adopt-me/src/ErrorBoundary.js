import React, { Component } from "react"
import { Link, Redirect } from "@reach/router"

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("ErrorBoundary caught an error", error, errorInfo)
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000) // alternadamente, sem state, setTimeout(() => navigate('/'), 5000)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        if (this.state.hasError) {
            return (
                <h1>
                    Something went wrong. <Link to="/">Click here</Link> to{" "}
                    return to home page or wait 5 seconds.
                </h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
