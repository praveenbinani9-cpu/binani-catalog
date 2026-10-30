<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Use TanStack Start file routes and shared textile components; legacy catalog URLs redirect to textile pages to keep old links working.
- Maintain typed fabric discovery data separately from confirmed commercial specifications; catalog classifications are not certified fibre composition.
- Save public RFQs through server-validated functions; private uploads are written server-side and cleaned up when saving fails.
- Keep staff roles in a protected user_roles table; inquiry access and temporary file downloads are authorised through RLS, never client credentials or storage flags.
- Centralise editable business contacts and fabric media so confirmed details and real photographs replace placeholders consistently.
