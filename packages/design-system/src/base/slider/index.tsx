import { Slider as BaseSlider } from "@base-ui/react/slider";

export function Slider({
  label,
  ...props
}: Omit<BaseSlider.Root.Props<number>, "className" | "children"> & {
  label: string;
}) {
  return (
    <BaseSlider.Root defaultValue={50} {...props} className="rf-slider">
      <div className="rf-slider-heading">
        <BaseSlider.Label className="rf-label">{label}</BaseSlider.Label>
        <BaseSlider.Value className="rf-slider-value" />
      </div>
      <BaseSlider.Control className="rf-slider-control">
        <BaseSlider.Track className="rf-slider-track">
          <BaseSlider.Indicator className="rf-slider-indicator" />
          <BaseSlider.Thumb className="rf-slider-thumb" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
