const items = [
    {
        id: "itm001",
        name: "Cordless Drill",
        description:
          "18V cordless drill, lightly used. Perfect for home projects and DIY tasks.",
        category: "Tools",
        owner: "Alice Johnson",
        condition: "Good",
        available: true,
        image:
          "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.4595,
          lng: 77.0266,
          address: "Block A, Sector 45",
        },
      },
      {
        id: "itm002",
        name: "Camping Tent",
        description:
          "4-person waterproof tent, easy setup. Great for weekend getaways.",
        category: "Outdoors",
        owner: "Brian Lee",
        condition: "Excellent",
        available: true,
        image:
          "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.4652,
          lng: 77.0565,
          address: "Block B, Sector 50",
        },
      },
      {
        id: "itm003",
        name: "Crock Pot",
        description:
          "Large 6-quart slow cooker, works great. Perfect for family meals.",
        category: "Kitchen",
        owner: "Samantha Green",
        condition: "Very Good",
        available: false,
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        borrowedBy: "Prachi Patel",
        location: {
          lat: 28.47,
          lng: 77.03,
          address: "Block C, Sector 47",
        },
      },
      {
        id: "itm004",
        name: "Yoga Mat",
        description:
          "Non-slip yoga mat, 6mm thick, blue color. Perfect for home workouts.",
        category: "Fitness",
        owner: "Ravi Mehra",
        condition: "Good",
        available: true,
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.475,
          lng: 77.04,
          address: "Block D, Sector 48",
        },
      },
      {
        id: "itm005",
        name: "Ladder",
        description: "6-foot aluminum step ladder, sturdy and lightweight.",
        category: "Tools",
        owner: "Dana Wang",
        condition: "Good",
        available: true,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.48,
          lng: 77.05,
          address: "Block E, Sector 49",
        },
      },
      {
        id: "itm006",
        name: "Board Game: Settlers of Catan",
        description:
          "Complete set, all pieces included. Great for family game nights.",
        category: "Games",
        owner: "Luis García",
        condition: "Like New",
        available: true,
        image:
          "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.485,
          lng: 77.06,
          address: "Block F, Sector 51",
        },
      },
      {
        id: "itm007",
        name: "Blender",
        description: "High-speed blender for smoothies and food processing.",
        category: "Kitchen",
        owner: "Emma Wilson",
        condition: "Very Good",
        available: true,
        image:
          "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop",
        borrowedBy: null,
        location: {
          lat: 28.49,
          lng: 77.07,
          address: "Block G, Sector 52",
        },
      },
      {
        id: "itm008",
        name: "Bicycle",
        description: "Mountain bike, perfect for weekend rides and commuting.",
        category: "Outdoors",
        owner: "Mike Chen",
        condition: "Good",
        available: false,
        image:
          "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop",
        borrowedBy: "Sarah Kim",
        location: {
          lat: 28.495,
          lng: 77.08,
          address: "Block H, Sector 53",
        },
      },
];

module.exports = items;