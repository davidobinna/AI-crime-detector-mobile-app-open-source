import { setupIonicReact } from "@ionic/react"


setupIonicReact()

function App() {


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Crime Detector</h1>
        <p className="text-2xl font-bold mb-4">Tips: Click camera icon to take short</p>
        <p className="text-sm mb-2">Project Owner: Emenike Prosper</p>
        <p className="text-sm mb-2">School: University of Porthacourt</p>
        <p className="text-sm mb-2">Process: The app will take a while to analyze capshot and describe the crime scene.</p>
        <p className="text-sm mb-2">All crime scenes are recorded in our database for security purposes.</p>
        <p className="text-sm mb-2">A deployment fee is required to keep the server running for long-term use.</p>
      </div>
    </div>
  )
}

export default App
