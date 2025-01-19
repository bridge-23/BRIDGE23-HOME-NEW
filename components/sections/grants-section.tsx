export function GrantsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#141925] mb-6">
                        Backed by Industry Leaders
                    </h2>
                    <p className="text-xl text-gray-600">
                        Bridge23 is proud to be supported through grant programs from leading blockchain foundations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto items-center">
                    <div className="flex justify-center">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/X%20Dev%20Updates%20%20(3)-fVFePGGQDbUrixB9HaJaM1slkQg58p.png"
                            alt="DFINITY Foundation and iExec Logos"
                            className="h-24 md:h-32 object-contain"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-[#141925]">
                            Grant Program Recipients
                        </h3>
                        <p className="text-xl text-gray-600">
                            Our innovative AI technology has been recognized and supported through grants from the DFINITY Foundation and iExec, enabling us to build more powerful decentralized solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

