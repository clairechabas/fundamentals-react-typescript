import Component, { Item } from "./Component";

function Container() {
  const items: Item[] = [
    {
      id: crypto.randomUUID(),
      title: "A nice picture",
      imageUrl:
        "https://images.unsplash.com/photo-1674560435460-c266654fdc56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      type: "ImageItem",
    },
    {
      id: crypto.randomUUID(),
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea minima omnis blanditiis molestiae facilis nobis mollitia eos, consectetur magni quaerat quasi qui alias similique quisquam. Ipsum veritatis quo id.",
      type: "QuoteItem",
    },
  ];

  return <Component items={items} />;
}

export default Container;
