'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gif-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-47ecda94c61bb9b302f75ce7a95a4646ea8832a81e9d538b4c7cd12f956a0d30a45b69e20c79cecc605965ef812a58608dbe8098fcdb46a3a444e504b340d8c7"' : 'data-target="#xs-components-links-module-AppModule-47ecda94c61bb9b302f75ce7a95a4646ea8832a81e9d538b4c7cd12f956a0d30a45b69e20c79cecc605965ef812a58608dbe8098fcdb46a3a444e504b340d8c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-47ecda94c61bb9b302f75ce7a95a4646ea8832a81e9d538b4c7cd12f956a0d30a45b69e20c79cecc605965ef812a58608dbe8098fcdb46a3a444e504b340d8c7"' :
                                            'id="xs-components-links-module-AppModule-47ecda94c61bb9b302f75ce7a95a4646ea8832a81e9d538b4c7cd12f956a0d30a45b69e20c79cecc605965ef812a58608dbe8098fcdb46a3a444e504b340d8c7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GifsModule.html" data-type="entity-link" >GifsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GifsModule-dd160bcd017e3e43e46883171f76eb43e3d8c62d7c3781b159bd5d0d0ea360c4e98cd8be6002b00690c6982a6141f7744b1ce6a8d78e8a9ba603d99e04be9001"' : 'data-target="#xs-components-links-module-GifsModule-dd160bcd017e3e43e46883171f76eb43e3d8c62d7c3781b159bd5d0d0ea360c4e98cd8be6002b00690c6982a6141f7744b1ce6a8d78e8a9ba603d99e04be9001"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GifsModule-dd160bcd017e3e43e46883171f76eb43e3d8c62d7c3781b159bd5d0d0ea360c4e98cd8be6002b00690c6982a6141f7744b1ce6a8d78e8a9ba603d99e04be9001"' :
                                            'id="xs-components-links-module-GifsModule-dd160bcd017e3e43e46883171f76eb43e3d8c62d7c3781b159bd5d0d0ea360c4e98cd8be6002b00690c6982a6141f7744b1ce6a8d78e8a9ba603d99e04be9001"' }>
                                            <li class="link">
                                                <a href="components/GifsCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GifsCardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-9558d1bce50df914f0ac627bef19e25232b2676b5e8a84a6b07cb7500c3c942b476760486d1e1c10061d76073cb5c6819bd1f8f0fd68262dfadccbb50fc9b7fb"' : 'data-target="#xs-components-links-module-SharedModule-9558d1bce50df914f0ac627bef19e25232b2676b5e8a84a6b07cb7500c3c942b476760486d1e1c10061d76073cb5c6819bd1f8f0fd68262dfadccbb50fc9b7fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-9558d1bce50df914f0ac627bef19e25232b2676b5e8a84a6b07cb7500c3c942b476760486d1e1c10061d76073cb5c6819bd1f8f0fd68262dfadccbb50fc9b7fb"' :
                                            'id="xs-components-links-module-SharedModule-9558d1bce50df914f0ac627bef19e25232b2676b5e8a84a6b07cb7500c3c942b476760486d1e1c10061d76073cb5c6819bd1f8f0fd68262dfadccbb50fc9b7fb"' }>
                                            <li class="link">
                                                <a href="components/CookieBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CookieBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CookiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CookiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LegalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LegalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Convert.html" data-type="entity-link" >Convert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Convert-1.html" data-type="entity-link" >Convert</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GifsService.html" data-type="entity-link" >GifsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocialService.html" data-type="entity-link" >SocialService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Analytics.html" data-type="entity-link" >Analytics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownsizedSmall.html" data-type="entity-link" >DownsizedSmall</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownsizedSmall-1.html" data-type="entity-link" >DownsizedSmall</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FixedHeight.html" data-type="entity-link" >FixedHeight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FixedHeight-1.html" data-type="entity-link" >FixedHeight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GiphyRandomGIFResponse.html" data-type="entity-link" >GiphyRandomGIFResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GiphyResponse.html" data-type="entity-link" >GiphyResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Images.html" data-type="entity-link" >Images</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Images-1.html" data-type="entity-link" >Images</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Looping.html" data-type="entity-link" >Looping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Looping-1.html" data-type="entity-link" >Looping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta-1.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Onclick.html" data-type="entity-link" >Onclick</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/The480_WStill.html" data-type="entity-link" >The480_WStill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/The480_WStill-1.html" data-type="entity-link" >The480_WStill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});