// /data/testimonials.ts

export interface TestimonialItem {
  name: string;
  text: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    name: "Client Name",
    text: "Amazing work — clean UI, fast development and fantastic communication."
  },
  {
    name: "Developer / Collaborator",
    text: "Great problem solver and fast learner. Strong knowledge of MERN + Next.js."
  },
  {
    name: "Mentor / Senior",
    text: "Himanshu writes quality code and has design sense beyond beginners."
  }
];
