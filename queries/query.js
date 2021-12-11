import {gql} from "@apollo/client";




export const LoadMission = gql `
{
  launchesPast(limit: 10) {
    launch_site {
      site_name
      site_id
    }
    id
    mission_name
    launch_date_local
    links {
      mission_patch
    }
  }
}
`
//

export const LoadMission1 = gql`
query LoadMission1($launch:Date)
{
  launchesPast(limit:1 ,find: { launch_date_local:$launch }) {
    mission_name 
    launch_site {
      site_id
      site_name
    }
    links {
        flickr_images
      }
    launch_date_local
    id
    mission_id
    ships{
      image
      id
    }
    rocket {
      rocket {
        id
      }
    }
  }
}

`





;