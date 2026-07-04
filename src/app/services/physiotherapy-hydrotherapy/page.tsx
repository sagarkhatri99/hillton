import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Physiotherapy & Hydrotherapy | Movement, Pain Relief & Recovery | Hillton",
  description:
    "Discover physiotherapy and hydrotherapy at Hillton for pain relief, mobility restoration, strength recovery and whole-body rehabilitation.",
};

export default function PhysiotherapyHydrotherapyPage() {
  return (
    <ServicePageTemplate
      title="Physiotherapy & Hydrotherapy at Hillton"
      subtitle="Restoring movement, easing pain and rebuilding strength with guided therapy and water-based healing."
      introText={[
        <p key="1">
          Physiotherapy & Hydrotherapy is a practical, results-focused approach
          for people recovering from injury, managing chronic pain, improving
          mobility or rebuilding strength after illness or surgery.
        </p>,
        <p key="2" className="mt-4">
          Our therapy plans combine movement-based care, manual techniques and
          water-supported treatment so you can regain function comfortably and
          safely. The goal is not just temporary relief, but long-term
          improvement in how your body moves and feels.
        </p>,
        <p key="3" className="mt-4">
          At Hillton, every session is tailored to your condition, body type and
          daily routine. We adapt the plan to support your recovery while
          keeping it realistic for real life.
        </p>,
      ]}
      keyTherapies={[
        {
          title: "Physiotherapy Assessment & Movement Therapy",
          description:
            "A careful evaluation of posture, mobility, strength, pain patterns and functional limitations to create a targeted recovery plan.",
          items: [
            "Posture and alignment assessment",
            "Mobility and flexibility exercises",
            "Strengthening for weak or deconditioned muscles",
            "Support for balance, coordination and gait",
          ],
          duration: "30–45 minutes",
        },
        {
          title: "Manual Therapy & Rehabilitation",
          description:
            "Hands-on techniques and guided exercises that reduce stiffness, improve circulation and support safe movement.",
          items: [
            "Joint mobilisation and soft tissue release",
            "Pain-relieving techniques for stiffness and tension",
            "Targeted exercises for shoulders, knees, back and hips",
            "Guidance for posture and daily movement habits",
          ],
          duration: "30–60 minutes",
        },
        {
          title: "Hydrotherapy Sessions",
          description:
            "Water-based treatments that reduce load on the body while encouraging relaxation, circulation and functional movement.",
          items: [
            "Therapeutic baths and immersion treatments",
            "Warm water relaxation for muscle tension",
            "Contrast therapy for circulation and recovery",
            "Gentle movement in water for mobility and strength",
          ],
          duration: "20–40 minutes",
        },
        {
          title: "Recovery & Functional Conditioning",
          description:
            "A structured approach to help you return to everyday life, work and physical activity with confidence.",
          items: [
            "Progressive strengthening and endurance work",
            "Support for post-injury or post-surgery recovery",
            "Improved functional movement for daily tasks",
            "Home exercise guidance for continued progress",
          ],
          duration: "30–45 minutes",
        },
      ]}
      bestFor={[
        "Joint pain, stiffness and reduced mobility",
        "Back, neck or shoulder discomfort",
        "Post-injury or post-surgery rehabilitation",
        "Muscle weakness or deconditioning",
        "Poor circulation and recovery after illness",
        "Need for a gentle, low-impact therapy approach",
        "Sports or activity-related strain",
        "Long-term pain management and movement support",
      ]}
      timelineSteps={[
        {
          title: "Step 1: Assessment",
          duration: "15–20 minutes",
          description:
            "We understand your symptoms, movement limitations, medical history and daily goals.",
        },
        {
          title: "Step 2: Evaluation",
          duration: "10–15 minutes",
          description:
            "We assess movement patterns, pain points and areas that need the most support.",
        },
        {
          title: "Step 3: Therapy Plan",
          duration: "5 minutes",
          description:
            "We recommend a mix of physiotherapy and hydrotherapy based on your comfort, condition and recovery needs.",
        },
        {
          title: "Step 4: Treatment",
          duration: "30–60 minutes",
          description:
            "A session focused on gentle movement, relief and recovery.",
        },
        {
          title: "Step 5: Guidance",
          duration: "5 minutes",
          description:
            "We provide simple home exercises and routine suggestions to sustain long-term progress.",
        },
      ]}
      timelineNote="Recovery timelines vary based on the condition, severity and consistency of therapy. Some people notice early relief quickly, while others benefit from a longer structured plan."
      faqs={[
        {
          question:
            "Is physiotherapy & hydrotherapy suitable for chronic pain?",
          answer:
            "Yes. These therapies are often helpful for chronic pain, stiffness and functional limitations because they improve movement, circulation and body awareness without placing excessive strain on the body.",
        },
        {
          question: "Do I need a referral before I visit?",
          answer:
            "No referral is required. You can book directly for an assessment, and we will recommend the appropriate plan based on your needs.",
        },
        {
          question: "Can I combine this with other therapies?",
          answer: (
            <span>
              Absolutely. Many people combine physiotherapy & hydrotherapy with{" "}
              <Link
                href="/services/naturopathy"
                className="text-secondary hover:underline"
              >
                naturopathy
              </Link>{" "}
              or{" "}
              <Link
                href="/services/ayurveda-panchakarma"
                className="text-secondary hover:underline"
              >
                Ayurveda
              </Link>{" "}
              for a more complete healing approach.
            </span>
          ),
        },
        {
          question: "What should I bring or wear?",
          answer:
            "Wear comfortable, easy-to-move-in clothing. We can also provide support garments or robes depending on the therapy being used.",
        },
      ]}
      ctaText="Ready to move with less pain and more confidence?"
      ctaButtonText="Book a Physiotherapy & Hydrotherapy Consultation"
      ctaLink="/contact"
    />
  );
}
