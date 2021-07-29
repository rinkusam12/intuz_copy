import { gql } from "graphql-request"

export const careerQuery = gql`
    {
      careerPage {
        content {
          __typename
          ... on ComponentCareerCareerBanner {
            title
            description
            image{
                name
            }
          }
    
          ... on ComponentCareerPerkSection {
            title
            perks {
              icon_image {
                name
              }
              description
            }
            linkButton {
              btn_label
              btn_link
              btn_variation
            }
          }
    
          ... on ComponentUiBlockquote {
            quote
            author
          }
    
          ... on ComponentCareerWhyIntuzSection {
            title
            description
            why_component {
              title
              background_color
              mobile_background{
                name
              }
              description
              icon {
                name
              }
              image {
                name
              }
            }
          }
    
          ... on ComponentCareerRequirementSection {
            title
            description
          }
    
          ... on ComponentCareerWhoIntuzianSection {
            title
            first_description
            intuzians {
              description
              icon_image {
                name
              }
            }
            last_description
          }
    
          ... on ComponentCareerIntuzianValueSection {
            title
            subtitle
            intuzian_values {
              title
              description
              image {
                name
              }
            }
          }
    
          ... on ComponentCareerWhyNotIntuzSection {
            title
            description
            why_not_points {
              title
              description
            }
            last_para
          }
    
          ... on ComponentCareerOurApproachSection {
            title
            subtitle
            description
            focus_point
          }
    
          ... on ComponentCareerLifeAtIntuzSection {
            title
            showcases {
              image {
                name
              }
              link
              link_text
              video_embed
            }
          }
    
          ... on ComponentCareerTeamMemberSection {
            title
            subtitle    
            developers {
              developer {
                member_journey
                name
                image {
                  name
                }
                designation
                totalExperience
                projectDone
                recentprojects {
                  link
                  image {
                    name
                  }
                }
                technicalexperiences {
                  title
                  image {
                    name
                  }
                  experience
                  expPercentage
                  projects
                  projectsPercentage
                }
              }
            }
          }
    
          ... on ComponentCareerExcitingOppurtunitySection {
            title
            openings {
              career {
                position_name
                ready
                apply_link
              }
            }
            employee_word {
              author_image {
                name
              }
              quote
              author
              designation
            }
            final_text
          }
        }
      }
    }  
    `