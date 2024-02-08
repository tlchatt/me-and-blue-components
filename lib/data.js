import prisma from "../lib/prisma"
import { makeSerailizable, writeSiteMap } from "../lib/utils";

export async function getPageData(path) {
  let page = await prisma.Page.findFirst({
    where: { url: path }
  })

  makeSerailizable(page)
  if (!(page?.json)) {
    return null
  }
  if (!(page?.published)) {
    return null
  }
  page = page.json
  var branding = await prisma.Branding.findFirst()
  makeSerailizable(branding)
  branding = branding.json
  var appearance = await prisma.Appearance.findFirst()
  makeSerailizable(appearance)
  appearance = appearance.json
  var subNavEntries = await prisma.SubNavEntry.findMany()
  makeSerailizable(subNavEntries)
  var navEntries = await prisma.NavEntry.findMany({
    include: {
      subNavEntries: {
        select: {
          page: {
            select: {
              url: true,
            },
          },
          json: true
        },
      },
      page: {
        select: {
          url: true,
        },
      },
    },
  })
  makeSerailizable(navEntries)
  return {
    page: page,
    navEntries: navEntries,
    subNavEntries: subNavEntries,
    branding: branding,
    appearance: appearance
  }
}
export async function getPagePathData(path) {
  var allPages = await prisma.Page.findMany()
  makeSerailizable(allPages)
  var branding = await prisma.Branding.findFirst()
  makeSerailizable(branding)
  branding = branding.json
  var publishedPages = []
  let sectionList = {}

  allPages.forEach(page => {
    if (page.published && page.url != '/') {
      publishedPages.push(page.url)
    }
    page.json.Layout.forEach(section => {
      sectionList[section.type] = true
      if (section.type === 'general-html') {
        // console.log('generalhtml-url ', page.url)
      }
    })
  })
  //console.log('sectionList\n' , sectionList, '\n')
  const paths = publishedPages




  // console.log('paths pushed for Prerender ', paths)
  //writeSiteMap(publishedPages,branding);

  return { paths }
}
export async function getAllPageData(path) {
  var allPages = await prisma.Page.findMany()

  makeSerailizable(allPages)
//  console.log('allPages', allPages)
  return { allPages: allPages }
}
export async function getPageUpdatedAt(path) {
  console.log('getPageData(', path , ')')
  let page = await prisma.Page.findFirst({
    where: { url: path }
  })

  makeSerailizable(page)
return page.updatedAt
}