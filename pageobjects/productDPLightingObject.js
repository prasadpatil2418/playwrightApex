//header element
export const header = "//div[@class='region-header__content region-header__content-large']"

//breadCurmb
export const breadcrumb = "//nav[@class='breadcrumb']"

//productPageElements
export const productTitle = "[class = 'field field--name-field-long-description field--type-string field--label-hidden field__item']"
export const SKUId= "//span[@class='field field--name-title field--type-string field--label-hidden'][normalize-space()='GWFL85']"
export const rating = "//div[@class='rating']"
export const productDescription = "div[class='product-body'] div[class='clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item']"
export const whereToBuyCTA = "div[class='product-detail-content-container__rating-container'] div"
export const productImageLocator = "[class='product-detail-slider__thumbs-wrapper swiper-wrapper'] [typeof*='foaf:Image']"
export const slideArrowPreviousLocator = "button[aria-label='Previous slide']"
export const slideArrowNext = "button[aria-label='Next slide']"

//featuresAndSpecifications menu
export const featuresTAB = "//a[normalize-space()='Features']"
export const specificationsTAB = "//a[normalize-space()='Specifications']"
export const fAQSTAB= "//a[normalize-space()='FAQs']"
export const reviewsTAB = "//a[@href='#reviews-resources']"

// featuresSection
export const featuresSectionTitle = "li[id='features'] div[class='node--type-product__accordion-content-header']"
export const featuresDetail = "[class='field field--name-field-product-features field--type-string field--label-hidden field__items']"
export const specificationsSectionTitle = "li[id='specifications'] div[class='node--type-product__accordion-content-header']"
export const specificationsDetail  = "//li[@id='specifications']//div[@class='node--type-product__accordion-content']"
export const expandedspecificationsDetails = "li[id='specifications'] div[class='node--type-product__accordion-content']"
export const readMoreSpecifications = "//div[@class='read-more']" 
export const readLessSpecifications = "//div[@class='read-more']"

//faqSection
export const faqsSectionTitle = "//div[normalize-space()='Frequently Asked Questions']"
export const firstFAQ = "//div[normalize-space()='How long does the battery last on a single charge?']"
export const firstFAQAnswer = "//div[@class='double-field-second show']" 
export const secondFAQ = "//div[normalize-space()='What is the maximum brightness output of the light?']"
export const secondFAQAnswer = "//div[@class='double-field-second show']"
export const thirdFAQ = "//div[normalize-space()='Is the Charge cord included?']"
export const thirdFAQAnswer = "//div[@class='double-field-second show'] "

export const faqsLocator = "[class='container-inline field__item']"
export const faqsQuestionLocator = "[class='double-field-first']"
export const faqsAnswersLocator = "[class='double-field-second show']"
export const faqContainer = "[class='double-field-unformatted-list field field--name-field-faqs field--type-double-field field--label-hidden field__items']"


export const reviewsSectionTitle = "li[id='reviews-resources'] div[class='node--type-product__accordion-content-header']"
//export const reviewsTAB = "//li[@class='active']//a[contains(text(),'Reviews')]"
export const reviewsSellerImage = "[class='ps-review-seller']"
export const reviewStars = "[class='ps-five-star']"
export const reviewAverage = "[class='ps-review-average']"
export const reviewCount = "[class='ps-review-count']"
export const resourcesCardLocator = "article[class='node node--type-media-page node--view-mode-teaser']"

// relatedProductSection
export const relatedProductHeading = "//h2[normalize-space()='Related Product']"
export const relatedProductSubtext = "//p[contains(text(),'Accomplish more with tools you can rely on. Streng')]"
export const relatedProductCardsLocator = "[class='node node--type-product node--view-mode-related-product-list node--promoted']"
export const relatedProductCardsImageLocator = "[class='node node--type-product node--view-mode-related-product-list node--promoted'] [class='node__media node__media--with-media node__listing-image']"
export const relatedProductCardsSKULocator = " [class='node__sku']"
export const relatedProductCardsSubTextLocator = "[class='node node--type-product node--view-mode-related-product-list node--promoted'] [class='clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item']"
export const relatedProductCardsRatingLocator = "[class='node node--type-product node--view-mode-related-product-list node--promoted'] [class='bv_main_container']"
export const relatedProductCardsCTALocator = "[class='node node--type-product node--view-mode-related-product-list node--promoted'][class ='ps-button-label']"

export const resourcesTAB = "//li[@class='active']//a[contains(text(),'Resources')]"
export const resourcesCards = "[class*='views-row']"
export const resourcesCardDateField = "[class = 'field field--name-field-published-date field--type-datetime field--label-hidden field__item']"
export const resourcesCardDateFieldContentType = "[class = 'field field--name-field-media-type field--type-list-string field--label-hidden field__item']"
export const resourcesCardSubText  = "[class='node__summary'] [class = 'clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item']"
export const resourcesCardText = "[class='node__long-description'] [class = 'field field--name-title field--type-string field--label-hidden']"
export const resourcesCardReadMoreLink = "[class='btn node__read-more-button']"

export const relatedProductSectionTitle = "[class='section-header'] h2"
export const relatedProductSectionSubTitle = "[class='section-header'] p"
export const relatedProductCards = "[class='view-content'] [class='view-related-products-slider__list-item']"
export const relatedProductCardImage = "[src*='/sites/gearwrench/files/styles/product_small/public/pim_images/']"
export const relatedProductCardTitle = "[class='node__long-description'] [class ='field field--name-field-long-description field--type-string field--label-hidden field__item']"
export const relatedProductCardSKUIdLocator = "[class='node__sku'] [class='field field--name-title field--type-string field--label-hidden']"
export const relatedProductCardStarRating = "[class='node__inner'] [class='bv_stars_component_container']"
export const relatedProductCardSubText = "[class='node__body-details'] [class='clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item']"
export const relatedProductWhereToBuyCTA = "[class*='view-content'] [class='ps-button-label']"
export const relatedProductCardLink = "[class='view-related-products-slider__list'] a[href*='/all-tools/shop-equipment-tool-sets/lighting/']"