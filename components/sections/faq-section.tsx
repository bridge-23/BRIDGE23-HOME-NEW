import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Does the AI assistant work in-person?",
    answer: "Yes! Our AI assistant works seamlessly for both virtual and in-person meetings. It can transcribe conversations and provide insights regardless of the meeting format."
  },
  {
    question: "Can I use it without a bot?",
    answer: "While the AI assistant (bot) is a core part of the experience, you can still use basic features like meeting scheduling and note-taking without it."
  },
  {
    question: "Does it work on my phone?",
    answer: "Yes, our platform is fully mobile-responsive and works on all modern smartphones and tablets. We also offer dedicated mobile apps for iOS and Android."
  },
  {
    question: "Is my data used to train AI models?",
    answer: "No, your data remains private and is not used to train our AI models. We prioritize your privacy and security above all else."
  },
  {
    question: "What messaging platforms does it work with?",
    answer: "Our AI assistant integrates with Telegram, WhatsApp, Slack, Discord, and more. We're constantly adding support for new platforms."
  }
]

export function FaqSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

