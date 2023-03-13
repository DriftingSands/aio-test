/*
 * <license header>
 */

import React from "react"
import ErrorBoundary from "react-error-boundary"

import { HashRouter as Router, Routes, Route } from "react-router-dom"

import ExtensionRegistration from "./ExtensionRegistration"
      
import CfeTestModal from "./cf-editor-testModal"
      
import CfeTestHeader from "./cf-editor-test-headerModal"

function App(props) {
  return (
    <Router>
      <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
        <Routes>
          <Route index element={<ExtensionRegistration />} />
          
          <Route
            exact path="index.html"
            element={<ExtensionRegistration />} 
          />
                                    
          <Route
            exact path="content-fragment/:fragmentId/cf-editor-test-modal"
            element={<CfeTestModal />}
          />
                                              
          <Route
            exact path="cf-editor-test-header-modal"
            element={<CfeTestHeader />}
          />
          
        </Routes>
      </ErrorBoundary>
    </Router>
  )

  // Methods

  // error handler on UI rendering failure
  function onError(e, componentStack) {}

  // component to show if UI fails rendering
  function fallbackComponent({ componentStack, error }) {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Phly, phly... Something went wrong :(
        </h1>
        <pre>{componentStack + "\n" + error.message}</pre>
      </React.Fragment>
    )
  }
}

export default App
