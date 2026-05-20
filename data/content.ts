import { Product, ClientCategory, ValueProposition } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Whole & Half Carcass',
    description: 'Freshly prepared whole or half carcass beef for high-volume wholesale requirements.',
    // ✅ "Welsh beef cut on butcher paper" — Llio Angharad (Sep 2021)
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    category: 'Bulk Supply',
  },
  {
    id: '2',
    name: 'Prime Boneless Beef',
    description: 'Premium-cut lean boneless beef chunks, perfect for commercial processing and catering.',
    // ✅ "Assortment of raw beef cuts with seasoning on wooden board" — Sergey Kotenev (Aug 2023)
    image: 'https://images.unsplash.com/photo-1690983320937-ca293f1d1d97?auto=format&fit=crop&w=600&q=80',
    category: 'Standard Cuts',
  },
  {
    id: '3',
    name: 'Premium Steaks & Ribs',
    description: 'Tender, well-marbled Ribeye, T-Bone, and Sirloin cuts tailored for premium hotels and restaurants.',
    // ✅ "Raw beef Short Ribs prepped for the barbecue" — James Kern (Jul 2021)
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    category: 'Premium Cuts',
  },
  {
    id: '4',
    name: 'Custom Commercial Cuts',
    description: 'Tailored dicing, mincing, and specialized portion sizing matching your precise business recipes.',
    // ✅ "Raw rib eye beef steaks, salted, on cutting board" — Kelsey Todd (Sep 2023)
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
    category: 'Custom Services',
  },
];

export const CLIENT_CATEGORIES: ClientCategory[] = [
  { id: '1', title: 'Schools & Institutions', description: 'Reliable, cost-effective, nutrition-dense bulk beef supplies adhering to strict academic delivery schedules.', icon: 'GraduationCap' },
  { id: '2', title: 'Hotels & Resorts', description: 'Strictly graded premium cuts fulfilling fine-dining standards with unbroken cold-chain supply lines.', icon: 'Hotel' },
  { id: '3', title: 'Restaurants & Eateries', description: 'Consistent supply volumes and customized daily cuts to preserve your kitchen prep time.', icon: 'Utensils' },
  { id: '4', title: 'Commercial Butcheries', description: 'Hygienic wholesale carcasses and primal cuts ready for retail processing and local distribution.', icon: 'Store' },
];

export const VALUES: ValueProposition[] = [
  { id: '1', title: '100% Halal Certified', description: 'Every stage of our slaughter and processing pipeline complies fully with national Islamic Halal guidelines.', icon: 'CheckCircle' },
  { id: '2', title: 'Uncompromising Hygiene', description: 'Processed exclusively within state-of-the-art facilities utilizing modern food-grade stainless steel configurations.', icon: 'ShieldAlert' },
  { id: '3', title: 'Reliable Cold-Chain Logistics', description: 'Delivered using specialized temperature-regulated vehicles ensuring products arrive fresh.', icon: 'Truck' },
];