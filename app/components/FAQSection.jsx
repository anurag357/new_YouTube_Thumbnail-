"use client"
import { useState } from 'react';

const faqs = [
    {
        question: "What is this AI Image Editor?",
        answer:
            "This is an advanced AI-powered image editing tool that transforms photos based on simple text instructions. It delivers high-quality results with impressive consistency, making it one of the best editing tools available. It outperforms other editors by offering reliable character adjustments and scene enhancements."
    },
    {
        question: "How does it work?",
        answer:
            "Just upload a photo and describe the changes you want using everyday language. The AI can handle complex prompts like “place the character in a snowy landscape” or “recreate the entire face realistically.” It reads your instructions and applies them to produce detailed and polished images."
    },
    {
        question: "How is it better than other tools?",
        answer:
            "This editor stands out for preserving facial details, blending scenes smoothly, and supporting one-shot edits. Users say it’s far superior in maintaining character consistency and making edits look seamless. It also allows working with multiple images to create cohesive visuals, perfect for social media influencers."
    },
    {
        question: "Can I use it for commercial purposes?",
        answer:
            "Absolutely! It’s widely used for generating AI-based content, marketing visuals, influencer campaigns, and product photos. The high-quality results make it suitable for professional projects and advertising purposes."
    },
    {
        question: "What kinds of edits can it handle?",
        answer:
            "It can perform a wide range of edits such as filling in missing facial parts, changing backgrounds, adding objects, applying different styles, or altering characters. It understands instructions like “place in a snowstorm” or “recreate the face entirely,” all while keeping the image realistic and true to the original."
    },
    {
        question: "Where can I try this tool?",
        answer:
            "You can test it through our web interface. Upload your image, type your request, and let the AI work its magic, delivering fast and accurate edits that match your vision."
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-16 max-w-4xl mx-auto px-4 text-center">
            <p className="text-yellow-500 text-sm font-semibold uppercase mb-2">FAQs</p>
            <h2 className="text-2xl font-bold text-white mb-8">
            Everything You Need to Know
            </h2>

            <div className="space-y-4 text-left">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-4 py-3 text-white bg-gray-900 hover:bg-gray-800 flex justify-between items-center"
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-4 py-3 bg-gray-800 text-gray-300 text-sm">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
