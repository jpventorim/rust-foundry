import { useState } from "react";
import { Alert } from "../src/base/alert";
import { Button } from "../src/base/button";
import { Checkbox } from "../src/base/checkbox";
import { Select } from "../src/base/select";
import { TextField } from "../src/base/text-field";
import { Textarea } from "../src/base/textarea";
import type { FieldSurface } from "../src/theme/provider";

const languages = [
  { value: "common", label: "Common" },
  { value: "elvish", label: "Elvish" },
  { value: "dwarvish", label: "Dwarvish" },
];

/** Story fixture only: not a product feature or library component. */
export function ReferenceForm({
  surface = "auto",
}: {
  surface?: FieldSurface;
}) {
  const [saved, setSaved] = useState(false);
  return (
    <form
      className="rf-reference-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(true);
      }}
    >
      <TextField
        label="Name"
        name="name"
        placeholder="Enter a name"
        description="Shown with the note."
        surface={surface}
      />
      <Select
        label="Language"
        name="language"
        items={languages}
        defaultValue="common"
        surface={surface}
      />
      <div className="rf-reference-wide">
        <Textarea
          label="Notes"
          name="notes"
          placeholder="Enter notes"
          description="Additional details for this note."
          surface={surface}
        />
      </div>
      <div className="rf-reference-wide">
        <Checkbox label="Keep notes private" name="private" defaultChecked />
      </div>
      <div className="rf-reference-actions">
        <Button type="submit">Save note</Button>
        <Button type="reset" variant="ghost" onClick={() => setSaved(false)}>
          Reset
        </Button>
      </div>
      {saved && (
        <div className="rf-reference-wide">
          <Alert title="Saved" tone="emerald">
            Your changes have been saved.
          </Alert>
        </div>
      )}
    </form>
  );
}
