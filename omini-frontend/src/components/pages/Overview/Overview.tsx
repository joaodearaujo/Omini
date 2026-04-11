import Main from "../../ui/Main/Main";
import OverviewWrapper from "./components/OverviewWrapper/OverviewWrapper";

const OVERVIEW_CONFIG = {
  title: 'Overview',
  subtitle: 'Get summary of your weekly online transactions here.'
}

const Overview = () => (    
    <Main title={OVERVIEW_CONFIG.title} subtitle={OVERVIEW_CONFIG.subtitle}>
      <OverviewWrapper />
    </Main>
  )


export default Overview


