import Article from "../../components/Article";
import ListWithControlButtons from "../../components/ListWithControlButtons";
import Section from "../../components/Section";

export default function PopLayoutPage() {
  return (
    <Section title="AnimatePresence mode - sync, wait, popLayout">
      <Article title="mode: sync">
        <ListWithControlButtons mode="sync" />
      </Article>

      <Article title="mode: wait">
        <ListWithControlButtons mode="wait" />
      </Article>

      <Article title="mode: popLayout">
        <ListWithControlButtons mode="popLayout" />
      </Article>
    </Section>
  );
}
