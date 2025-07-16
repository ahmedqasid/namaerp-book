export const SIDEBAR_CONFIG = {
    "/": [{
        text: "Home",
        collapsible: true,
        children: [{
            text: "Supply Chain",
            collapsible: true,
            children: ["/supply-chain/items.md"]
        }]
    }, "/introduction/introduction.md", "/accounting/accounting.md", "/fixed-assets/fixed-assets.md"],
}