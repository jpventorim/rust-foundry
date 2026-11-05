import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

export function Avatar({
  name,
  src,
  size = "md",
}: {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
  return (
    <BaseAvatar.Root
      className="rf-avatar"
      data-size={size}
      role="img"
      aria-label={name}
    >
      {src && <BaseAvatar.Image src={src} alt="" className="rf-avatar-image" />}
      <BaseAvatar.Fallback aria-hidden="true" className="rf-avatar-fallback">
        {initials}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}
