import HeadAndFootNew from 'components/HeadAndFoot/HeadAndFootNew';
import { GetStaticProps } from 'next';
import Layout from 'components/Layout/Layout';
import LetsTalkComp from 'components/LetsTalkComp/LetsTalkComp';
import SectionClients from 'containers/HomePage/SectionClients/SectionClients';
import SectionFeatureApp from 'containers/HomePage/SectionFeatureApp/SectionFeatureApp';
import SectionHero from 'containers/HomePage/SectionHero/SectionHero';
import SectionInformation from 'containers/HomePage/SectionInformation/SectionInformation';
import SectionPartner from 'containers/HomePage/SectionPartner/SectionPartner';
import SectionResource from 'containers/HomePage/SectionResource/SectionResource';
import SectionService from 'containers/HomePage/SectionService/SectionService';
import { getHomePageData, getUniversal } from 'lib/api';



const Index = ({ data, uv }) => {
  return (
    <HeadAndFootNew data={uv}>
      <Layout>
        <SectionHero />
        <SectionService sectionservices={data.sectionservices} />
        <SectionClients sectionclients={data.sectionclients} />
        <SectionFeatureApp />
        <SectionInformation />
        <SectionPartner />
        <SectionResource heading="Intuz Resources" sub_heading="Insights on latest technology trends, enterprise mobility solutions, & company updates" sectionresources={data.guides} />
        <LetsTalkComp />
      </Layout>
    </HeadAndFootNew>


  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(context);
  let uv = await getUniversal('/');
  let data = await getHomePageData();

  return {
    props: {
      uv,
      data
    },
    revalidate: false,
  }
}

export default Index







