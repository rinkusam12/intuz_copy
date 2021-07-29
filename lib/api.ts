// import { request, GraphQLClient, gql } from 'graphql-request'
import { request, GraphQLClient, gql } from "graphql-request";
import Router from "next/router";
import { careerQuery } from "./api/careerQuery";
const endpoint = process.env.NEXT_PUBLIC_API || "https://strapi-prod-aws.intuz.com/graphql";

export const client = new GraphQLClient(endpoint, { headers: {} });

export async function callAPI(query, variables = {}) {
  const data = client
    .request(query, variables)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });

  return data;
}

export async function getUniversal(asPath) {
  // const router = Router;

  let query = gql`
    query{
        pages(where:{name:"Universal"}){
            script_footer
            after_load_scripts
            meta_tags
        }
        mainmeta:pages(where:{link:"${asPath}"}){
            title
            meta_tags 
            script_footer
            description
            no_index
          } 
    }
    `;
  let data = await callAPI(query);
  return data;
}

export async function getHomePageData() {
  let query = gql`
    query {
      sectionservices(limit: 4) {
        id
        image {
          name
        }
        title
        link
      }

      sectionclients(limit: 8) {
        id
        title
        image {
          name
        }
      }
      guides(sort: "updatedAt:desc", limit: 3, where: { ready: true }) {
        id
        title
        resourceBlockImage {
          name
        }
        image {
          name
        }
        link
      }
    }
  `;

  let data = await callAPI(query);

  return data;
}

export async function getAdaptivegrowthPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          title
          subTitle
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
      }
      sectiongrowthexpectations {
        title
        description
      }
    }
  `;

  let data = await callAPI(query, { id: "5dc2995393184b6168302a8d" });

  return data;
}
export async function getAgileDevopsServicesPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          id
          title
          subTitle
          description
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
      }
      whatwedoagiles {
        title
        description
        image {
          name
        }
      }

      factandawards {
        image {
          name
        }
        caption
      }

      testimonialcarouselcontents {
        id
        name
        app_image {
          name
        }
        client_image {
          name
        }
        designation
        description
      }

      awardandrecognitions {
        caption
        image {
          name
        }
        description
      }
    }
  `;

  let data = await callAPI(query, { id: "5e0c4a2ddf424b3e0ff4e440" });

  return data;
}
export async function getWorkPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionclients {
          id
          title
          image {
            name
          }
          link
        }
      }
    }
  `;

  let data = await callAPI(query, { id: "5d9af067b7e7780fe88a8555" });

  return data;
}
export async function getAndroidDevelopmentPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        faqs {
          Faqs {
            question
            answer
            answerHtml
          }
        }

        sectionbanner {
          title
          subTitle
          description
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
        sectiontolicongroups {
          title
          icon {
            name
          }
        }
        sectionbottomicongroups {
          title
          icon {
            name
          }
        }
        sectionbreakpoints {
          title
          backImage {
            name
          }
          buttonLabel
          buttonLink
        }
        sectiontopicondetails {
          title
          description
          icon {
            name
          }
          link
        }
      }
      testimonialcarouselcontents {
        id
        name
        app_image {
          name
        }
        client_image {
          name
        }
        designation
        description
      }
    }
  `;

  let data = await callAPI(query, { id: "5d9b16437ae32010aa1898da" });

  return data;
}
export async function getAppMarketingPackagesPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          title
          subTitle
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
        sectiontopicondetails {
          title
          icon {
            name
          }
          priceblockcontent
        }
      }
    }
  `;

  let data = await callAPI(query, { id: "5dc903cbf26cfc278372d9df" });

  return data;
}
export async function getAppMarketingPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          title
          subTitle
          description
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
        sectiontopicondetails {
          title
          description
          icon {
            name
          }
          link
        }
        sectionmiddleicondetails {
          title
          description
          icon {
            name
          }
        }
        sectionbottomicondetails {
          title
          description
          icon {
            name
          }
        }
      }
    }
  `;

  let data = await callAPI(query, { id: "5d9b16747ae32010aa1898dc" });

  return data;
}
// export async function getAwardsAssociationsPageData() {
//   let query = gql`

//   `;

//   let data = await callAPI(query, );

//   return data;
// }
export async function getBlockchainPageData() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          id
          title
          subTitle
          description
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
      }
      blockchainservices {
        id
        title
        icon {
          name
        }
      }

      blockchaintechstacks {
        id
        title
        image {
          name
        }
      }

      sectionresources(limit: 3) {
        id
        title
        image {
          name
        }
        link
      }
      blockchainusecases {
        id
        title
        image {
          name
        }
      }
    }
  `;

  let data = await callAPI(query, { id: "5e26c1ef126d025bb6d071e7" });

  return data;
}
export async function CustomAppDevelopment() {
  let query = gql`
    query($id: ID!) {
      apppage(id: $id) {
        sectionbanner {
          title
          subTitle
          description
          backImage {
            name
            hash
          }
          buttonLabel
          buttonLink
        }
        sectionbreakpoints {
          title
          backImage {
            name
          }
          buttonLabel
          buttonLink
        }
        sectiontolicongroups {
          title
          icon {
            name
          }
        }
        sectionbottomicongroups {
          title
          icon {
            name
          }
        }
        sectiontopicondetails {
          title
          description
          icon {
            name
          }
          link
        }
        sectionbottomicondetails {
          title
          description
          icon {
            name
          }
        }
      }
      testimonialcarouselcontents {
        id
        name
        app_image {
          name
        }
        client_image {
          name
        }
        designation
        description
      }
    }
  `;

  let data = await callAPI(query, { id: "5d9b162f7ae32010aa1898d9" });

  return data;
}
export async function getCareersData() {
  let query = gql`
    {
      careers {
        position_name
        ready
        apply_link
      }
    }
  `;

  let data = await callAPI(query);

  return data;
}
export async function getGuideData() {
  let query = gql`
    query {
      guides(sort: "updatedAt:desc", where: { ready: true }) {
        id
        title
        description
        image {
          name
        }
        link
      }
    }
  `;

  let data = await callAPI(query);

  return data;
}
export async function getBlogData() {
  let query = gql`
    query {
      blogs(sort: "createdAt:desc", limit: 4, where: { done: true }) {
        id
        title
        link
        description
        updatedAt
        resourceBlockImage {
          name
        }
        blog_category {
          id
          name
          link
        }
        blog_author {
          id
          name
          image {
            name
          }
          link
        }
      }
      guides(sort: "updatedAt:desc", limit: 6, where: { ready: true }) {
        id
        resourceBlockImage {
          name
        }
        image {
          name
        }
        title
        link
        description
        updatedAt
      }
      blogCategories {
        id
        name
        link
        blog(sort: "updatedAt:desc", limit: 4, where: { done: true }) {
          id
          title
          link
          description
          updatedAt
          resourceBlockImage {
            name
          }
          blog_author {
            id
            name
            image {
              name
            }
            link
          }
        }
      }
    }
  `;

  let data = await callAPI(query);

  return data;
}

export async function getNewCareerData() {
  let data = await callAPI(careerQuery);
  return data;
}

export async function getAboutPageData() {
  const allQuery = gql`
query ($id:ID!){
    apppage(id:$id){
        sectionbanner {
            title
            subTitle
            backImage {
                name
                hash
            }
            buttonLabel
            buttonLink
            videolink
        }
        sectionbreakpoints{
            title
            backImage {
                name
            }
            buttonLabel
            buttonLink
        }
        sectiontopicondetails {
          title
          description
          icon {
            name
          }
        }
    }
    guides(sort: "updatedAt:desc", limit:3) {
        id
        title
        resourceBlockImage{
            name	
        }
        image {
          name
        }
        link
    }
    sectionethics{
      id
      name
      icon{
        name
      }
    }
  }
`;
  let data = await callAPI(allQuery, { id: "5dbbe0fcb8cb1f3f1668b02d" });
  return data;
}

export async function getFoodDeliveryPageData() {
  const allQuery = gql`
  query ($id:ID!){
      apppage(id:$id){
          faqs{
              Faqs{
                question
                answer
                answerHtml
              }
          }
        sectionbanner {
          title
          subTitle
          description
          backImage {
              name
              hash
          }
          topImage {
              name
              hash
          }
          buttonLabel
          buttonLink
      }
      featuresection {
          title
          image {
              name
              hash
          }
      }
      sectiontabtitles {
          id
          title
          icon {
              name
          }
          activeTabIcon {
              name
          }
      }
      sectionbreakpoints{
          title
          backImage {
              name
          }
          buttonLabel
          buttonLink
      }
      sectionpagehalfblocks {
          backImage {
              name
              hash
          }
          topLeftImage {
              name
              hash
          }
          topRightImage {
              name
              hash
          }
          firstIcon {
              name
              hash
          }
          secondIcon {
              name
              hash
          }
      } 
      }
    }
  `;
}

export async function getPartnerPageData() {
  const allQuery = gql`
  query($id:ID!){
      sectionpartnerbigserviceblocks {
          title
          description
          backImage {
              name
          }
      }
      apppage(id:$id){
          sectionbanner{
              title
              subTitle
              description
              backImage {
                  name
                  hash
              }
              buttonLabel
              buttonLink
          }
          sectionservices{
              id
              image{
                name
              }
              title
              subTitle
          }
          sectionbreakpoints{
              title
              backImage {
                  name
              }
              buttonLabel
              buttonLink
            } 
      }
  }
`;

  let data = await callAPI(allQuery, { id: "5da40d57697a1831aed39106" });
  return data;
}

export async function getNodeJsData() {
  const allQuery = gql`
query($id:ID!) {
    apppage(id:$id){
        faqs{
            Faqs{
              question
              answer
              answerHtml
            }
        }

        sectiontopicondetails {
            title
            description
            icon {
                name
            }
            link
        }
        sectionbanner {
            id
            title
            subTitle
            description
            backImage {
                name
                hash
            }
            buttonLabel
            buttonLink
        }
    }
    awardandrecognitions{
        caption
        image{
          name
        }
        description
    }
}
`;
  let data = await callAPI(allQuery, { id: "5dd3a5e6ac13540b46dda0f1" });
  return data;
}

export async function getPrivacyPageData() {
  const query = gql`
query{
    privacypolicies{
       Content
       title
    }
}
`;
  let data = await callAPI(query);
  return data;
}

export async function getReactNativePageData() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      sectionbanner {
        id
        title
        subTitle
        description
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
    }
    whatwedomobiles {
      title
      image {
        name
      }
      desc
      info
      classname
    }
    awardandrecognitions {
      caption
      image {
        name
        hash
      }
      description
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5e0c3d92614d3a16a64e9b39" });
  return data;
}

export async function getReactJsPageData() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      sectiontopicondetails {
        title
        description
        icon {
          name
        }
        link
      }
      sectionbanner {
        id
        title
        subTitle
        description
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
    }
    awardandrecognitions {
      caption
      image {
        name
      }
      description
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5dd291e5ac13540b46dda0d5" });
  return data;
}

export async function getRapidAppData() {

  const allQuery = gql`
query ($id:ID!){
    apppage(id:$id){
        sectionbanner {
            title
            subTitle
            backImage {
                name
                hash
            }
            buttonLabel
            buttonLink
            videolink
            description
        }
        sectionbreakpoints{
            title
            backImage {
                name
            }
            buttonLabel
            buttonLink
        }
    }
    guides(sort: "updatedAt:desc", limit:3) {
        id
        title
        resourceBlockImage{
            name	
        }
        image {
            name
        }
        link
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5dc2a7f9ab382c61d83eaf05" });
  return data;
}

export async function getMobileAppData() {
  const allQuery = gql`
query {
    whatwedomobiles{
        title
        image{
          name
        }
        desc
        info
        classname
      }  

    factandawards{
        image{
          name
        }
        caption
    }

    awardandrecognitions{
        caption
        image{
          name
        }
        description
    }
  }
`;

  let data = await callAPI(allQuery);
  return data;
}

export async function getSitemapPageData() {
  const query = gql`
    query{
        pagetypes{
            id
            type
            heading
            pages{
                    name
                    link
                }
        }
    }
`;
  let data = await callAPI(query);
  return data;
}

export async function getTaxiAppData() {
  const allQuery = gql`
query ($id:ID!){
    apppage(id:$id){
        faqs{
            Faqs{
              question
              answer
              answerHtml
            }
          } 
        sectionbanner {
            title
            subTitle
            description
            backImage {
                name
                hash
            }
            topImage {
                name
                hash
            }
            buttonLabel
            buttonLink
        }
        featuresection {
            title
            image {
                name
                hash
            }
        }
        sectiontabtitles {
            id
            title
            icon {
                name
            }
            activeTabIcon {
                name
            }
        }
        sectionbreakpoints{
            title
            backImage {
                name
            }
            buttonLabel
            buttonLink
        }
        sectionpagehalfblocks {
            backImage {
                name
                hash
            }
            topLeftImage {
                name
                hash
            }
            topRightImage {
                name
                hash
            }
            firstIcon {
                name
                hash
            }
            secondIcon {
                name
                hash
            }
            
        } 
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5d9edfa2f387931e76e34ef9" });
  return data;
}

export async function getWhyPageData() {
  const allQuery = gql`
query ($id:ID!){
    apppage(id:$id){
      sectionbanner {
        title
        subTitle
        backImage {
            name
            hash
        }
        buttonLabel
        buttonLink
      }
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5dc01bd98779c93c0bd3ee77" });
  return data;
}
export async function getBlogAuthorData(link) {
  const allQuery = gql`
    query {
        blogCategories {
            id
            name
            subTitle
            link
            banner {
              name
            }
        }
        blogAuthors(where:{
          link:"${link}"
        }) {
          id
          name
          authorInfo
          image {
            name
          }
          link
          designation
          linkedinUrl
          twitterUrl
        }
      }
    `;

  let data = await callAPI(allQuery);
  return data;
}

export async function getBlogCategoryData() {
  const allQuery = gql`
  query {
    blogCategories {
      id
      name
      subTitle
      link
      banner {
        name
      }
      blog(where: { done: true }) {
        id
        title
        link
        description
        updatedAt
        done
        resourceBlockImage {
          name
        }
        blog_author {
          id
          name
          image {
            name
          }
          link
        }
      }
    }
  }
`;

  let data = await callAPI(allQuery);
  return data;
}

export async function getCloudWhyUsData() {

  const query = gql`{
    cloudPage(id:"5ede13dc87ae723e7a0701ba"){
       title
      description
      image{
        name
      }
      meta_tags
      footer_scripts
    }
  }`;
  let data = await callAPI(query);
  return data;
}

export async function getLabCalvertsData() {
  const query = gql`
    query{
        lab(id:"5dc2a398add05061b5e0ad49"){
            labfeatures{
                id
              feature
            }
        }
    }

`;

  let data = await callAPI(query);
  return data;
}

export async function getWtherLabData() {
  const query = gql`
  query{
      lab(id:"5dc2a390add05061b5e0ad48"){
          labfeatures{
              id
            feature
          }
      }
  }

`;
  let data = await callAPI(query);
  return data;
}

export async function getIWtherData() {
  const query = gql`
    query{
        lab(id:"5dc2a3a2add05061b5e0ad4a"){
            labfeatures{
                id
              feature
            }
        }
    }

`;
  let data = await callAPI(query);
  return data;
}

export async function getWtherCompleteData() {
  const query = gql`
    query{
        lab(id:"5dc92397f26cfc278372d9fd"){
            labfeatures{
                id
              feature
            }
        }
    }

`;
  let data = await callAPI(query);
  return data;
}

export async function getLabCalverts2Data() {
  const query = gql`
    query{
        lab(id:"5dc94a1cf26cfc278372da0a"){
            labfeatures{
                id
              feature
            }
        }
    }

`;

  let data = await callAPI(query);
  return data;
}
export async function getLabAlarmrData() {

  const query = gql`
    query{
        lab(id:"5dc94a1cf26cfc278372da0a"){
            labfeatures{
                id
              feature
            }
        }
    }

`;

  let data = await callAPI(query);
  return data;
}

export async function getCloudDocData() {

  const query = gql`{
    cloudPage(id:"5ede2a1187ae723e7a0701be"){
       title
      description
      meta_tags
      image{
        name
      }
      footer_scripts
    }
  }`;

  let data = await callAPI(query);
  return data;
}

export async function getKnowledgeBaseData() {
  const query = gql`
query{
    knowledgeBases{
      title
      description
      listing_image{
        name
      }
      slug
    }
  }
    `;

  let data = await callAPI(query);
  return data;
}

export async function getCloudStackData() {
  const allQuery = gql`{
    cloudPage(id:"5ede13b887ae723e7a0701b8"){
        title
       description
       meta_tags
       image{
        name
      }
       footer_scripts
     }
}
`;

  let data = await callAPI(allQuery);
  return data;
}

export async function getCloudCaseStudyData() {
  const query = gql`
{

      cloudPage(id:"5ede13f987ae723e7a0701bb"){
        title
      description
      image{
        name
      }
      meta_tags
      footer_scripts
    }

    cloudCaseStudies(sort:"updatedAt:desc"){
      deployment_type
      backColor
      name
      description
      logo{
          name
      }
      cloud_case_study_results{
        id
        result
      }
      cloud_case_study_tech_descs{
        description
        cloud_case_study_technology{
            title
            icon{
            name
          }
        }
      }
    }
  }
`;

  let data = await callAPI(query);
  return data;
}

export async function getCaseStudyData(id) {
  const query = gql`
    query{
        casestudies( where:{ link:"${id}" } )  {
            name
            backcolor
            casestudymoreprojects(limit:3) {
                id
                title
                description
                image {
                    name
                }
                link
            }
            casestudybanner{
                id
                logo {
                    name
                }
                title
                icons {
                    name
                }
            }
          
            casestudyhighlightsection {
                title
                subtitle
                frame_folder
                image {
                    name
                }
                AnimatedImage
                casestudyhighlightsectionicons {
                    name
                    icon {
                        name
                    }
                }
                casestudyhighlightblocks {
                    title
                    subtitle
                    image {
                        url
                    }
                }
            }
            casestudyfeaturessection {
                title
                description
                image {
                    name
                }
                fullpageimage
                animatedImage
                featurelist{
                  title
                  icon{
                    name
                  }
                  image{
                    name
                  }
                }
                
            }

           casestudyprojectchallenges{
              title
              description
              icon{
                url
                name
              }
              fullpageimage
              projectchallengesiconbox{
              description
              icon{
                    url
                    name
                  }
             }
      }

            casestudydesignchallenge{
                title
                subtitile
                description
                image{
                  name
                }
                fullpageImage
            }

            casestudyengagement{
                title
                subtitile
                description
                image{
                  name
                }
            }

            process{
                analysis
                visualization
                designing
                development
                satisfaction
                internalreview
                clientreview
                launch
                uiux
                quickbloxintegration
                awsdeployment
                apprevenue
                androiddevelopment
                iphonedevelopment
                research
                marketing
                discovery
                gpssystemintegration
                pushnotifications
                loyaltybonusalgorithm
                qa
                monetize
                deploy
                discover
                progressivedevelopment
            }

            casestudytechnicalspecs{
                title
                icon{
                  url
                }
            }

            casestudytestimonial{
                name
                status
                testimonial
                image{
                  name
                }
            }
            casestudydevprocesses{
                icon{
                    url
                }
                title
            }
            casestudyhighlightmenus(sort:"order:asc") {
                name
                link
            }
            case_study_solution{
              title
              subtitle
              solution{
                description
                icon{
                  name
                }
              }
          }
        }
    }
`;

  let data = await callAPI(query);
  return data;
}

export async function getBlogPageData(link) {
  const allQuery = gql`
  query {
      blogs(where:{
        link:"${link}"
      }){
          blog
          metaTitle
          metaDescription
          socialImage{
            name
          }
          scripts
          title
          subtitle
          link
          updatedAt
          blog_category{
            name
            link
          }
          blog_author{
            name
            authorInfo
            image{
              name
            }
            link
            
            linkedinUrl
            twitterUrl
          }
          banner{
          name
          }
          head
          moreBlogs(limit:3) {
            id
            title
            image{
              name
            }
            link
          }     
      }
    }
  `;

  let data = await callAPI(allQuery);
  return data;
}

export async function getIotDevelopmentData() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      faqs {
        Faqs {
          question
          answer
          answerHtml
        }
      }
      sectionbanner {
        id
        title
        subTitle
        description
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
    }
    guides(sort: "updatedAt:desc", limit: 3, where: { ready: true }) {
      id
      title
      resourceBlockImage {
        name
      }
      image {
        name
      }
      link
    }
    page(id: "5e70a6380e4a3655cb4e0f60") {
      sectiontabcontents {
        id
        title
        description
        icon {
          name
        }
      }
    }
    iotWifiProducts {
      id
      name
      icon {
        name
      }
    }
    iotBluetoothProducts {
      id
      name
      icon {
        name
      }
    }
    communicationProtocols {
      id
      title
      subtitle
      icon {
        name
      }
    }
    communicationLayers {
      id
      name
      icon {
        name
      }
      layers {
        id
        name
        icon {
          name
        }
      }
      nameInfo
    }
    iotTechStacks {
      id
      icon {
        name
      }
      tech_brief_intro
    }
    iotPartners {
      id
      name
      logo {
        name
      }
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5e708e93de44cb78c7b78e39" });
  return data;
}

export async function getIosDevelopment() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      faqs {
        Faqs {
          question
          answer
          answerHtml
        }
      }
      sectionbanner {
        title
        subTitle
        description
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
      sectionbreakpoints {
        title
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
      sectiontolicongroups {
        title
        icon {
          name
        }
      }
      sectionbottomicongroups {
        title
        icon {
          name
        }
        description
      }
      sectiontopicondetails {
        title
        description
        icon {
          name
        }
        link
      }
    }
    testimonialcarouselcontents {
      id
      name
      app_image {
        name
      }
      client_image {
        name
      }
      designation
      description
    }
    sectionresources(where: { page: "ios" }) {
      id
      title
      image {
        name
      }
      link
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5d9b16627ae32010aa1898db" });
  return data;
}

export async function getHireAppPageData() {
  const query = gql`
    query($id:ID!){
        apppage(id:$id){
            sectionbanner {
                title
                subTitle
                description
                backImage {
                    name
                    hash
                }
                buttonLabel
                buttonLink
            }
        }
        testimonialcarouselcontents{

            id  
            name
            app_image{
              name
            }
            client_image{
              name
            }
            designation
            description
        }
    
        awardandrecognitions{
            caption
            image{
              name
            }
            description
        }
    }
`;
  let data = await callAPI(query, { id: "5e2a8897126d025bb6d07212" });
  return data;

}

export async function getFullStackPageData() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      sectionbanner {
        id
        title
        subTitle
        description
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
    }
    whatwedofullstacks {
      icon {
        name
      }
      title
      description
      technologies {
        name
      }
    }

    factandawards {
      image {
        name
      }
      caption
    }

    testimonialcarouselcontents {
      id
      name
      app_image {
        name
      }
      client_image {
        name
      }
      designation
      description
    }

    awardandrecognitions {
      caption
      image {
        name
      }
      description
    }
  }
`;

  let data = await callAPI(allQuery, { id: "5e0c3de9614d3a16a64e9b3b" });
  return data;
}

export async function getEnterprisePageData() {
  const allQuery = gql`
  query ($id: ID!) {
    apppage(id: $id) {
      sectionbanner {
        title
        subTitle
        backImage {
          name
          hash
        }
        buttonLabel
        buttonLink
      }
      sectionbreakpoints {
        title
        backImage {
          name
        }
        buttonLabel
        buttonLink
      }
      sectiontolicongroups {
        title
        icon {
          name
        }
      }
      featuresection {
        id
        title
        image {
          name
        }
      }
      sectionbottomicondetails {
        id
        title
        description
        icon {
          name
        }
      }
      sectiontopicondetails {
        id
        title
        description
        icon {
          name
        }
      }
    }
    guides(sort: "updatedAt:desc", limit: 3, where: { ready: true }) {
      id
      title
      resourceBlockImage {
        name
      }
      image {
        name
      }
      link
    }
  }
`;
  let data = await callAPI(allQuery, { id: "5d9eff2135ac7d28319aea0a" });
  return data;
}

export async function getAIPageData() {

  const query = gql`
    query ai{
        aiofferings{
            id
        title
        description
        imagecolor
        image{
          name
        }
      }
      
      aisectionfours{
        heading
        paragraph
        image{
          name
        }
        reverse
      }
      
      aiinnovations{
        title
        desc
        listtitle
        image{
          name
        }
        listitems
        reverse
      }
    }
`;
  let data = await callAPI(query);
  return data;
}


export async function getELearningPageData() {

  const query = gql`
    query{
        faq(id:"5f183dace5e1df3cc07160dd"){
            Faqs{
              question
              answer
              answerHtml
            }
        }
        elearningsolutions{
            title
            subtitile
            image{
              name
            }
        }
        
        awardandrecognitions{
            caption
            image{
              name
            }
            description
        }
    }
`;
  let data = await callAPI(query);
  return data;
}