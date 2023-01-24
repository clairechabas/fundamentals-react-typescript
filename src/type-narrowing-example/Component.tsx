// Do
interface ImageItem {
  id: string;
  title: string;
  imageUrl: string;
  // For equality check type narrowing:
  type: "ImageItem";
}
interface QuoteItem {
  id: string;
  quote: string;
  // For equality check type narrowing:
  type: "QuoteItem";
}
export type Item = ImageItem | QuoteItem;

// Don't:
// export interface Item {
//   id: string;
//   title?: string;
//   imageUrl?: string;
//   quote?: string;
// }

interface ComponentProps {
  items: Item[];
}

function Component({ items }: ComponentProps) {
  return (
    <ul>
      {items.map((item) => {
        // -- Option 1: type narrowing with the "in" operator
        // if ("title" in item)
        // -- Option 2: type narrowing with equality check on a `type` property
        if (item.type === "ImageItem")
          return (
            <li key={item.id}>
              {item.title && <p>{item.title}</p>}
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ maxWidth: "15rem" }}
                />
              )}
            </li>
          );

        return (
          <li key={item.id}>
            {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export default Component;
