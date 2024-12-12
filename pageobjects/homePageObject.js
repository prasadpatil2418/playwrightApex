//used : method2
export const logo = '.site-logo'

//used: method3
export const toolsDropDown = "//li[@id='main-menu-item-0']" 
export const toolsItemsInToolsDropDown = 'li a'       // using the above container of tools we are locating the elemnts inside present as list and that has links

//used: method4
export const featuredToolsOptionInToolsDropDown = "//a[normalize-space()='Featured Tools']"

//used: method5
export const allToolsOptionInToolsDropDown = "//a[normalize-space()='All Tools']"

//used: method6
export const supportLocator = "//li[@id='main-menu-item-1']//a[@class='menu-item__link menu-item__link--depth-0'][normalize-space()='Support']"

//used: method7
export const whereToBuyLocator ="//a[normalize-space()='Where to Buy']"

//used: method8
export const searchBarIconLocator = "span[title='Open Header Search Bar']"
export const searchBoxLoacator = "input[placeholder='Search GEARWRENCH.com']"

//used: method10
export const heroBannerBackGroundImageLocator =  '#paragraph-8411 picture'
export const heroBannerHeadingLocator = "//h1[normalize-space()='BREAK THE RULES']"
export const heroBannerSubTextLocator = ".field.field--name-field-attribution.field--type-string.field--label-hidden.field__item"
export const heroBannerShopNowButtonLocator =".component-hero-banner__link.button"//=> opens diagnostic page

//used: method11
export const browseOurNewProductTitleLocator = '#main-content'
export const browseOurNewProductSubTitle = 'Tired tools? Pass. Shop our'
export const totalProductsDisplayedInBrowseOurProduct = '[class="component-product-slider__list"] [class="component-product-slider__list-item"]'

//used: method12
export const productImagesBrowseOurNewProductSection = '[class="component-product-slider__list"] [class="component-product-slider__list-item"] [class="node__media node__media--with-media node__listing-image"]'

//used: method13
export const buyButtonCountForTiles = '[class="ps-button-label"]'
export const popUpForBuyNowVisible = "div[class='ps-ribbon ps-online-tab-label selected'] h2[class='ps-online-heading']"
export const closeBuyNowpopUp = "span[aria-label='Close the shop now shopping interface.'] svg"

//used: method14
export const viewNewProductsButtonLocator = "a[href='/new-products']"

//used: method15
export const imageModularToolSet = '#paragraph-8426 picture'
export const headingModularToolSet= "section[id='paragraph-8426'] h3"
export const subTextModulaToolSet = "section[id='paragraph-8426'] p"
export const buttonLearnMoreModularToolSet = "a[href='/resources/tool-sets/modular-tool-sets']"

//used: method16
export const imageShopByIndustry ='#paragraph-8431 picture'
export const headingShopByIndustry = "section[id='paragraph-8431'] h3"
export const subTextShopByIndustry = "section[id='paragraph-8431'] p"
export const buttonShopToolsByIndustry = "section[id='paragraph-8431'] a"

//used: method17
export const imageWhoWeAreSection = "img[alt='Who we Are']"
export const headingWhoWeAre = "//h3[normalize-space()='Who We Are']"
export const subParaWhoWeAre =  "//p[@class='component-content__content']"
export const buttonLearnAboutUsWhoWeAre = "a[href='/who-we-are']"

//method18
export const headingSignUp = "div[class='title-desc-wrapper'] h3"
export const subTextSignUp = 'Join our email newsletter and'
export const firstNameSignUpField = 'First name*'
export const lastNameSignUpField =  'Last name*'
export const emailSignUpField =  'Email Address*'
export const checkBoxSignUp = "I've read and accept the"
export const buttonSignUp = "input[value='Sign Up']"
export const signUpSuccessText = 'Thanks for submitting the'

//used: method20
export const imageWarrentySection = "img[alt='image']"
export const headerWarrentySection = "//h4[normalize-space()='Warranty']"
export const subtitleWarrentySection = "section[id='paragraph-8501'] p"
export const viewWarrentyInfoButton = "//a[normalize-space()='VIEW WARRANTY INFO']"

//used: method21
export const imageResourceSection = "//img[@alt='Man holding a GEARWRENCH flex flashlight looking at a car that is raised up on a jack stand inside of a garage with a GEARWRENCH tool chest in the background']"
export const headerResourceSection = "//h4[normalize-space()='Resources']"
export const subtitlResourceSection = "section[id='paragraph-8506'] p"
export const viewResourceInfoButton = "section[id='paragraph-8506'] a"


//used: method22
export const socialIcons = "[class='menu menu--depth-0 menu--social'] [class='menu-item menu-item--depth-0']"
export const logoFooter = "a[title='GEARWRENCH Home'] svg"
export const addressFooter = '[class="block-footer-navigation-block__footer-address"]'


//used: method23
//headers in footer section: Support, GearWrench, Resource
export const  footerTitleSupport = "//li[@class='menu-item menu-item--depth-0 menu-item--has-children']//a[@class='menu-item__link menu-item__link--depth-0'][normalize-space()='Support']"
export const  footerTitleResources = ".menu-item__link.menu-item__link--depth-0[href='/resources']"
export const footerTitleGearwrench = "//a[normalize-space()='GEARWRENCH']"
           

//footer sub links
export const footerSubLinks = '[class="menu menu--depth-0 menu--footer"] [class="menu-item menu-item--depth-0 menu-item--has-children"] [class="menu-item menu-item--depth-1"]'

//used: method26
export const countryDropDown = ".block__content-toggle[aria-controls='country-switch-menu--content']"
export const coutryOption = '[class="menu-item__link"]'
      
//*******************************************************          Support Page            ***************************************************************

//used: method2
export const heroBannerBackGroundImageLocatorSupport =  '#paragraph-8576 picture'
export const heroBannerHeadingLocatorSupport = "//h1[normalize-space()='Support']"
export const heroBannerSubTextLocatorSupport = ".field.field--name-field-attribution.field--type-string.field--label-hidden.field__item"


//used: method3
export const checkOutOurResourcesTitleLocator = "h3.component-two-column-card__title"
export const checkOutOurResourcesSubTitleLocator = "div[class='section-header'] p"

//used: method4
export const imageWarrentySectionSupport = "#paragraph-8601 picture"
export const headerWarrentySectionSupport = "//h4[normalize-space()='Warranty']"
export const subtitleWarrentySectionSupport = "section[id='paragraph-8601'] div[class='clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden field__item']"
export const viewWarrentyInfoButtonSupport = "a[href='/warranty-replacement-form']"

//used: method5
export const imageFaqsSectionSupport = "#paragraph-8606 picture"
export const headerFaqsSectionSupport = "//h4[normalize-space()='FAQs']"
export const subtitleFaqsSectionSupport = "section[id='paragraph-8606'] p"
export const exploreFaqsButtonSupport = "a[href='/support/faqs']"

//method6
export const headingSignUpSupport = "//header[normalize-space()='Email Sign-Up']"
export const firstNameSignUpFieldSupport = "input[name='firstname']"
export const lastNameSignUpFieldSupport =  "input[name='lastname']"
export const emailSignUpFieldSupport =  "input[name='email']"
 export const checkBoxSignUpSupport = "#i_ve_read_and_accept_the_privacy_policy-6ee3b0f7-6f37-4d39-a411-adf5080379c2"
export const buttonSignUpSupport = "input[value='Sign Up']"
export const signUpSuccessTextSupport = 'Thanks for submitting the'



//*******************************************************          Resources Page            ***************************************************************

//used: method2
export const heroBannerBackGroundImageLocatorResources =  '#paragraph-8471 picture'
export const heroBannerHeadingLocatorResources = "//h1[normalize-space()='Resources']"
export const heroBannerSubTextLocatorResources = ".field.field--name-field-attribution.field--type-string.field--label-hidden.field__item"


//used: method3
export const contentTypeFilterLocator = "div[id='edit-media-type'] label[class='option']"

//used: method4
export const toolCategoryFilterLocator ='#edit-field-category--wrapper'

//used: method5
export const categoryFilterLocator = "div[id='edit-field-category'] label[class='option']"