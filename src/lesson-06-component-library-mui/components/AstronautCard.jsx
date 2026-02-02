export default function AstronautCard(
  { astronaut },
) {
  // Get the required properties from the astronaut object
  const { agency, bio, date_of_birth: dateOfBirth, image, name, nationality, status } = astronaut;
  const { thumbnail_url: thumbnailUrl } = image;
  const nationalityName = nationality[0].name;
  const { abbrev } = agency;
  const { name: statusName } = status;

  return (
    <li className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex items-start gap-4">
        {/* Explore: https://nextjs.org/docs/app/getting-started/images
            to find out more about image optimization in Next.js */}
        <img
          src={thumbnailUrl}
          className="w-20 h-20 rounded object-cover flex-shrink-0"
          alt={name}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="mb-1 font-semibold">{name} ({statusName})</h3>
            <small className="text-gray-600">born {dateOfBirth}</small>
          </div>
          <small className="text-gray-500">{nationalityName} ({abbrev})</small>
          <p className="mb-1 mt-2">{bio}</p>
        </div>
      </div>
    </li>
  );
}
