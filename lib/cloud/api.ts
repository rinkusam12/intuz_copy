// import { request, GraphQLClient, gql } from 'graphql-request'
import { request, GraphQLClient, gql  } from 'graphql-request'
const endpoint = process.env.NEXT_PUBLIC_API_PATH || 'https://strapi-prod-aws.intuz.com/graphql';

export const client = new GraphQLClient(endpoint, { headers: {} })

export async function callAPI(query, variables = { }){
    const data = client.request(query, variables).then(data=>{
        // console.log(data);
        return data
    }).catch(err=>{
        throw err;
    });

    return data;
}

export async function getUniversal(){

    let query = gql `
    query{
        pages(where:{name:"Universal"}){
            script_footer
            after_load_scripts
            meta_tags
        }
    }
    `
    let data = await callAPI(query);
    return data;
}

export async function getHomePageData(){

    const query = gql`{
        cloudPage(id:"5ede139687ae723e7a0701b7"){
           title
          description
          meta_tags
          image{
            name
          }
          footer_scripts
        }
      }`

      let data = await callAPI(query);
      return data;

}


export async function getServicePage(){

    const query = gql`{

        cloudPage(id:"5ede13ce87ae723e7a0701b9"){
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

      let data = await callAPI(query);
      return data;

}