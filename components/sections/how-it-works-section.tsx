import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Easy to start, simple to use
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Get started in two minutes. Let automations do the work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Step 1 */}
          <div className="relative p-6 md:p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              1
            </div>
            <div className="h-[280px] md:h-[320px] mb-6">
              {/* Connections Flow */}
              <div className="relative min-h-[240px] md:min-h-[280px]">
                {/* Connection Lines */}
                {/* Horizontal line from Agent to Notion */}
                <div className="absolute left-16 md:left-20 top-12 w-[calc(100%-180px)] md:w-[calc(100%-220px)] border-t-2 border-dashed border-gray-200"></div>
                {/* Vertical line from Agent to Messaging */}
                <div className="absolute left-10 md:left-12 top-24 h-16 md:h-20 border-l-2 border-dashed border-gray-200"></div>

                {/* Left Side: Agent and Messaging */}
                <div className="absolute left-0 top-0">
                  {/* Agent */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-black shadow-lg flex items-center justify-center overflow-hidden rounded-2xl mb-6 md:mb-8">
                    <div className="relative w-16 h-16 md:w-20 md:h-20">
                      <Image
                        src="/bridge23/Agent.png"
                        alt="Bridge23 Agent"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Messaging Apps */}
                  <div className="ml-2 md:ml-4">
                    <div className="bg-white rounded-full shadow-lg p-2 md:p-3 flex gap-2">
                      <div className="bg-[#25D366] rounded-lg w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                        <Image
                          src="/social/whatsapp/WhatsApp-Logo.png"
                          alt="WhatsApp"
                          width={16}
                          height={16}
                          className="object-contain brightness-0 invert md:w-5 md:h-5"
                        />
                      </div>
                      <div className="bg-black rounded-lg w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                        <Image
                          src="/social/Slack-Logo.png"
                          alt="Slack"
                          width={16}
                          height={16}
                          className="object-contain brightness-0 invert md:w-5 md:h-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Notion Card */}
                <div className="absolute right-0 top-0 w-[calc(100%-140px)] md:w-[calc(100%-180px)]">
                  <div className="bg-white rounded-3xl shadow-lg p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                      <Image
                        src="/integrations/Notion-logo.png"
                        alt="Notion"
                        width={20}
                        height={20}
                        className="object-contain md:w-6 md:h-6"
                      />
                      <span className="text-lg md:text-xl font-semibold">Tasks</span>
                    </div>

                    {/* Notion Tasks */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-300 rounded-md group-hover:border-gray-400 flex items-center justify-center">
                          <div className="w-2 h-2 md:w-3 md:h-3 bg-transparent rounded-sm group-hover:bg-gray-200"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm md:text-base text-gray-900">Call with Nick</span>
                            <span className="text-xs md:text-sm text-gray-400">10:00</span>
                          </div>
                          <p className="text-xs md:text-sm text-gray-500">Content plan</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-300 rounded-md group-hover:border-gray-400 flex items-center justify-center">
                          <div className="w-2 h-2 md:w-3 md:h-3 bg-transparent rounded-sm group-hover:bg-gray-200"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm md:text-base text-gray-900">Daily</span>
                            <span className="text-xs md:text-sm text-gray-400">15:00</span>
                          </div>
                          <p className="text-xs md:text-sm text-gray-500">Team sync</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stacked Cards Effect */}
                  <div className="absolute right-0 top-0 -z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F8F9FD] rounded-3xl"></div>
                    <div className="absolute top-2 -right-2 w-24 h-24 md:w-32 md:h-32 bg-[#F1F3F9] rounded-3xl -z-20"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Connect your groups
            </h3>
            <p className="text-sm md:text-base text-gray-600">
               Couple of clicks to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              2
            </div>
            <div className="h-[320px] mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="flex -space-x-4">
                  <img src="/bridge23/Centurio.png" alt="Person 1" className="w-20 h-20 rounded-full border-4 border-white" />
                  <img src="/team/Wira.png" alt="Person 2" className="w-20 h-20 rounded-full border-4 border-white" />
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
              Be fully prepared for the meeting.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              3
            </div>
            <div className="h-[320px] mb-6 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-100 rounded text-sm">Engineering Team</span>
                    <span className="px-2 py-1 bg-blue-100 rounded text-sm">Daily summary</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">Bridge23 <span className="text-gray-400">&lt;&gt;</span> xAI</div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-100 rounded text-sm">Engineering Team</span>
                    <span className="px-2 py-1 bg-blue-100 rounded text-sm">Daily summary</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">Bridge23 <span className="text-gray-400">&lt;&gt;</span> Antropic</div>
                  <div className="w-full h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Review your notes
            </h3>
            <p className="text-gray-600">
              Get a summary of the conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

