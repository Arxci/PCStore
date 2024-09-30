import { Icons } from "../icons";

const Reviews = ({
  totalReviews = 1,
  rating,
  maxRating = 5,
  display = { totalReviews: true, rating: true },
}: {
  totalReviews?: number;
  rating: number;
  maxRating?: number;
  display?: {
    totalReviews?: boolean;
    rating?: boolean;
  };
}) => {
  return (
    <div className="flex items-center">
      <ul className="flex items-center">
        {Array(maxRating)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              {index + 1 <= rating ? (
                <Icons.star className="fill-yellow-500 text-yellow-500" />
              ) : (
                <Icons.star className="fill-default-200 text-default-200" />
              )}
            </li>
          ))}
      </ul>
      {display?.rating && (
        <p className="pl-2 pr-1 text-foreground-500 text-small">{rating}</p>
      )}
      {display?.totalReviews && (
        <span className="text-foreground-500 text-small">({totalReviews})</span>
      )}
    </div>
  );
};

export { Reviews };
