export const menuItems = [
  {
    title: "Dashboard",
    link: "/",
    children: null
  },
  {
    title: "Account",
    link: "/accounts",
    description: "Shows your account information.",
    children: [
      {
        title: "Sales",
        description: "Shows your sales information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/sales/collection"
          },
          {
            title: "Create",
            link: "/accounts/sales/create"
          }
        ]
      },
      {
        title: "Purchase",
        description: "Shows your purchase information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/purchase/collection"
          },
          {
            title: "Create",
            link: "/accounts/purchase/create"
          }
        ]
      },
      {
        title: "Journal",
        description: "Shows your journal information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/journal/collection"
          },
          {
            title: "Entry",
            link: "/accounts/journal/entry"
          }
        ]
      },
      {
        title: "Opening Entry",
        description: "Shows your opening entry information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/opening-entry/collection"
          },
          {
            title: "Entry",
            link: "/accounts/opening-entry/entry"
          }
        ]
      },
      {
        title: "Debtors",
        description: "Shows your debtors information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/debtors/collection"
          },
          {
            title: "Entry",
            link: "/accounts/debtors/entry"
          }
        ]
      },
      {
        title: "Creditors",
        description: "Shows your creditors information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/creditors/collection"
          },
          {
            title: "Entry",
            link: "/accounts/creditors/entry"
          }
        ]
      },
      {
        title: "Ledger",
        description: "Shows your ledger information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/ledger/collection"
          },
          {
            title: "Entry",
            link: "/accounts/ledger/entry"
          }
        ]
      },
      {
        title: "Parties",
        description: "Shows the parties information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/accounts/parties/collection"
          },
          {
            title: "Entry",
            link: "/accounts/parties/entry"
          }
        ]
      },
      {
        title: "Items",
        description: "Shows the items information.",
        link: null,
        children: [
          {
            title: "Collection",
            link: "/items/collection"
          },
          {
            title: "Entry",
            link: "/items/entry"
          }
        ]
      }
    ]
  },
  {
    title: "Stock",
    link: "/stocks",
    description: "Shows your stocks information.",
    children: [
      {
        title: "Contents",
        link: null,
        description: null,
        children: [
          {
            title: "Collection",
            link: "/stocks/sales/collection"
          },
          {
            title: "Create",
            link: "/stocks/sales/create"
          }
        ]
      }
    ]
  },
  {
    title: "Breeds",
    description: "Shows the breed information.",
    link: "/breeds",
    children: [
      {
        title: "Breed Content",
        description: null,
        link: null,
        children: [
          {
            title: "Collection",
            link: "/breeds/content/collection"
          },
          {
            title: "Create",
            link: "/breeds/content/create"
          }
        ]
      }
    ]
  },
  {
    title: "Hatchery",
    description: "Shows the hatchery information.",
    link: "/hatchery",
    children: [
      {
        title: "Hatchery Content",
        description: null,
        link: null,
        children: [
          {
            title: "Collection",
            link: "/hatchery/collection"
          },
          {
            title: "Create",
            link: "/hatchery/sales/create"
          }
        ]
      }
    ]
  }
];
