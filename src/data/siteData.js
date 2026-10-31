import mariaPhoto from '../assets/maria-santos.jpg'
import juanPhoto from '../assets/juan-dela-cruz.png'
import elenaPhoto from '../assets/elena-reyes.png'
import anaPhoto from '../assets/ana-villanueva.png'
import carmenPhoto from '../assets/carmen-ramos.png'
import rosaPhoto from '../assets/rosa-gonzales.png'
import teresaPhoto from '../assets/teresa-aquino.png'

export const contactEmail = 'support@compass-guidance.site'

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Our Team' },
  { id: 'services', label: 'Services' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
]

export const teamMembers = [
  { name: 'Dr. Charissa M. Rañeses', photo: rosaPhoto, photoScale: 1.8, specialization: 'Stress Management & Daily Routines', summary: 'Assists individuals with stress management and positive daily routines.', bio: 'Dr. Charissa M. Rañeses assists individuals with stress management techniques, relaxation, and establishing healthy daily routines.' },
  { name: 'Richard Pletado', photo: anaPhoto, photoScale: 1.8, specialization: 'Personal Growth & Emotional Resilience', summary: 'Provides a compassionate ear for personal growth and emotional resilience.', bio: 'Richard Pletado provides a compassionate ear for personal growth, mindfulness, and overcoming everyday stress.' },
  { name: 'Rae Wendy T. Lazaro', photo: teresaPhoto, photoScale: 1.2, specialization: 'Student Advocacy & Empowerment', summary: 'Dedicated to student advocacy, peer support, and personal empowerment.', bio: 'Rae Wendy T. Lazaro is dedicated to student advocacy, peer support programs, and empowering individuals to discover their strengths.' },
  { name: 'Carleen O. Mata', photo: juanPhoto, photoScale: 2.1, specialization: 'Leadership & Career Pathing', summary: 'Focuses on leadership development, career pathing, and community support.', bio: 'Carleen O. Mata focuses on leadership development, career pathing, and building strong peer support communities for young adults.' },
  { name: 'Dr. Aileen Villanueva', photo: mariaPhoto, photoScale: 2.1, specialization: 'Academic Counseling & Student Support', summary: 'Dedicated to helping students navigate academic milestones with empathy.', bio: 'Dr. Aileen Villanueva brings over 10 years of experience helping students navigate academic milestones, time management, and personal growth with empathy and actionable advice.' },
  { name: 'Lerrie De Leon', photo: carmenPhoto, photoScale: 1.8, specialization: 'Mindful Reflection & Goal Setting', summary: 'Passionate about mindful reflection, counseling support, and goal setting.', bio: 'Lerrie De Leon is passionate about mindful reflection, counseling support, and helping individuals set achievable life goals.' },
  { name: 'Nathalie Cogay', photo: elenaPhoto, photoScale: 1.25, specialization: 'Student Welfare & Positive Encouragement', summary: 'Specializes in student welfare, academic planning, and positive encouragement.', bio: 'Nathalie Cogay specializes in student welfare, academic planning, and cultivating positive emotional resilience.' },
]

export const services = [
  { icon: 'message', title: 'Counseling', description: 'One-on-one sessions offering professional support, clarity, and personalized coping strategies.', status: 'Available' },
  { icon: 'compass', title: 'Guidance', description: 'Directional mentoring for students and adults navigating life choices and personal milestones.', status: 'Available' },
  { icon: 'heart', title: 'Marital Therapy', description: 'Couples counseling designed to restore communication, trust, and relationship harmony.', status: 'Specialized' },
  { icon: 'people', title: 'Family Counseling', description: 'Support for families to resolve conflict, understand dynamics, and strengthen bonds.', status: 'Specialized' },
  { icon: 'brain', title: 'Psychological Trauma Therapy', description: 'Safe, evidence-based trauma healing and emotional recovery with licensed care.', status: 'Professional Care' },
  { icon: 'leaf', title: 'Acupuncture for Stress Relief', description: 'Holistic somatic therapy to release physical tension, lower cortisol, and calm anxiety.', status: 'Holistic Wellness' },
]

export const faqs = [
  { question: 'How can I book a counseling session?', answer: 'Reach out through our contact form by selecting your preferred topic, or visit our office at AMA Computer College – Bitas, Cabanatuan City.' },
  { question: 'Are my inquiries confidential?', answer: 'Professional counseling sessions and inquiries are handled with respect for privacy and confidentiality in accordance with professional ethical standards.' },
  { question: 'What are your office hours?', answer: 'We are open Monday through Friday, 9:00 AM to 5:00 PM.' },
]
