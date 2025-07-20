import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import JobberIntro from './components/Intro/JMSIntro'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  const [showIntro, setShowIntro] = useState(true)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  const [currentView, setCurrentView] = useState('login') // 'login' or 'signup'

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    // Get admin data from localStorage
    const { admin } = getLocalStorage()
    const adminUser = admin.find(a => a.email === email && a.password === password)

    if (adminUser) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleSignup = (formData) => {
    try {
      // Get current data from localStorage
      let currentData = getLocalStorage()
      
      // Generate a unique ID for the new user
      const newUserId = Math.max(...currentData.employees.map(emp => emp.id), 0) + 1
      
      // Create new user object
      const newUser = {
        id: newUserId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        tasks: [],
        taskCounts: {
          active: 0,
          newTask: 0,
          completed: 0,
          failed: 0
        }
      }

      if (formData.role === 'admin') {
        // Add to admin array
        currentData.admin.push({
          id: Math.max(...currentData.admin.map(admin => admin.id), 0) + 1,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        })
      } else {
        // Add to employees array
        currentData.employees.push(newUser)
      }

      // Update localStorage
      setLocalStorage(currentData)
      
      // Update context if it's an employee
      if (formData.role === 'employee') {
        SetUserData([...userData, newUser])
      }

      alert('Account created successfully! Please sign in.')
      setCurrentView('login')
    } catch (error) {
      console.error('Error creating account:', error)
      alert('Error creating account. Please try again.')
    }
  }

  const switchToSignup = () => {
    setCurrentView('signup')
  }

  const switchToLogin = () => {
    setCurrentView('login')
  }

  return (
    <>
      {showIntro ? (
        <JobberIntro onGetStarted={() => setShowIntro(false)} />
      ) : (
        <>
          {!user && currentView === 'login' && (
            <Login 
              handleLogin={handleLogin} 
              onSwitchToSignup={switchToSignup}
            />
          )}
          {!user && currentView === 'signup' && (
            <Signup 
              handleSignup={handleSignup} 
              onSwitchToLogin={switchToLogin}
            />
          )}
          {user == 'admin' && (
            <AdminDashboard changeUser={setUser} />
          )}
          {user == 'employee' && (
            <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
          )}
        </>
      )}
    </>
  )
}

export default App