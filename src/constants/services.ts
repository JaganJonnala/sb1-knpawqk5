export type ServiceCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { 
    id: 'beauty',
    title: "Beauty & Wellness",
    icon: "💅",
    description: "Professional beauty services at your doorstep"
  },
  { 
    id: 'home',
    title: "Home Services",
    icon: "🔧",
    description: "Expert home maintenance and repair"
  },
  { 
    id: 'cleaning',
    title: "Cleaning",
    icon: "🧹",
    description: "Professional cleaning services"
  },
  { 
    id: 'tutoring',
    title: "Tutoring",
    icon: "📚",
    description: "Expert tutors for all subjects"
  },
  { 
    id: 'appliance',
    title: "Appliance Repair",
    icon: "🔌",
    description: "Quick and reliable appliance repairs"
  },
  { 
    id: 'training',
    title: "Personal Training",
    icon: "💪",
    description: "Professional fitness training"
  }
];