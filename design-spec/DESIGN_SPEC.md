# Design Spec — Todo List App

This is the exact look your app should have once you finish Day 2 (CSS).
Open `reference.html` in your browser next to your own `project/index.html`
and compare them side by side.

## Colors

| Name | Hex | Used for |
|---|---|---|
| Background | `#F5F6FA` | page background |
| Card | `#FFFFFF` | the main white card |
| Border | `#E4E7EC` | hairline borders |
| Text | `#1F2430` | main text |
| Muted text | `#6B7280` | subtitles, counts, secondary text |
| Accent | `#6C5CE7` | Add button, active filter tab, checked box |
| Accent (hover) | `#5B4BD6` | Add button on hover |
| Success | `#22C55E` | completed checkmark |
| Danger | `#EF4444` | delete icon on hover |

## Font

Google Fonts **"Poppins"**, weights 400, 500, 600, 700. Add this to the
`<head>` of your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Spacing scale

Use these everywhere instead of random numbers, so spacing stays
consistent: `4px, 8px, 12px, 16px, 24px, 32px`.

## Shapes

- Card corners: `12px` rounded.
- Input/button corners: `8px` rounded.
- Filter tabs and the round checkbox: fully round (`border-radius: 9999px`).
- Card shadow: `box-shadow: 0 4px 20px rgba(20, 20, 43, 0.06);` (soft, not a
  hard black shadow).

## Layout

One centered white card, max-width `480px`, vertical stack, in this order:
1. Header (title + subtitle)
2. The add-task form (input + button, side by side)
3. Filter tabs (All / Active / Completed)
4. The list of tasks
5. Footer (items-left count + "Clear completed" button)

## States (what changes on interaction)

- **Input focus:** border turns accent-colored, plus a soft glow ring.
- **Add button:** normal = accent background; hover = darker accent;
  clicked = shrinks very slightly (`scale(0.97)`); disabled (empty input)
  = grey background, not clickable.
- **Todo row hover:** very light background tint.
- **Checkbox:** unchecked = just a circle outline; checked = filled with
  the success color plus a white checkmark, and the task text gets a
  strikethrough and turns muted-colored.
- **Delete icon:** normal = muted color, no background; hover = danger
  color with a soft red background tint.
- **Filter tab:** active = accent background, white text; inactive =
  transparent background, muted text; hover (inactive) = light background
  tint.

## Reference file

`reference.html` in this folder is a real, working example of this exact
design (no JavaScript — it's just a picture, not an interactive app).
Open it in your browser and compare it to your own app as you build.
