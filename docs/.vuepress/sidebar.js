export const SIDEBAR_CONFIG = {
    "/": [{
        text: "Home",
        collapsible: true,
        children: [{
            text: "Supply Chain",
            collapsible: true,
            children: ["/supply-chain/items.md"]
        }]
    }, "/introduction.md", "/accounting.md", "/fixed-assets.md"],
}