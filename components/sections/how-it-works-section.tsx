export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Easy to start, simple to use
          </h2>
          <p className="text-xl text-gray-600">
            Get started in two minutes. Add powerful automations to help you get more done.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              1
            </div>
            <div className="mb-6">
              <img src="/features/connect-groups-demo.svg" alt="Calendar Interface" className="w-full h-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Connect your groups
            </h3>
            <p className="text-gray-600">
              Connect your groups to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              2
            </div>
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="flex -space-x-4">
                  <img src="/placeholder.svg?height=80&width=80" alt="Person 1" className="w-20 h-20 rounded-full border-4 border-white" />
                  <img src="/placeholder.svg?height=80&width=80" alt="Person 2" className="w-20 h-20 rounded-full border-4 border-white" />
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                  </div>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Focus on your conversations
            </h3>
            <p className="text-gray-600">
              Be fully present in your conversations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              3
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2 py-1 bg-yellow-100 rounded text-sm">$15,000</span>
                  <span className="px-2 py-1 bg-blue-100 rounded text-sm">Auto summary</span>
                </div>
                <div className="text-lg font-semibold mb-2">Brianne <span className="text-gray-400">&lt;&gt;</span> Amir Weekly</div>
                <div className="w-full h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Review your notes
            </h3>
            <p className="text-gray-600">
              Review your notes and get a summary of the conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

