<script setup lang="ts">

import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {useI18n} from "#imports";
import DTable from "~/components/UI/DTable.vue";
import FaqCard from "~/components/Cards/FaqCard.vue";


const {locale, t} = useI18n()

const metaTitle = ref(t('portfolio_meta_service_title'))

useSeoMeta({
  title: metaTitle.value,
  ogTitle: metaTitle.value,
  ogType: "website",
})

type ServiceType = {
  service_name: string
  service_sub: string
  basic: {
    icon: string
    style: string
  }
  standard:  {
    icon: string
    style: string
  }
  premium: {
    icon: string
    style: string
  }
  gold:  {
    icon: string
    style: string
  }
}

type PackageNamesType = "basic" | "standard" | "premium" | "gold"
type PackageTranslateNamesType = {
  basic: string
  standard: string
  premium: string
  gold: string
}

const selectedPackage = ref<PackageNamesType>('basic')
const servicesData = ref<ServiceType[]>([
  {
    service_name: t("service_frontend"),
    service_sub: t("service_frontend_sub"),
    basic: {
      icon:"material-symbols:check-small-rounded",
      style: ''
    },
    standard: {
          icon: "material-symbols:check-small-rounded",
          style: ''
        },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_backend"),
    service_sub: t("service_backend_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px'
    },
    standard: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_spa"),
    service_sub: t("service_spa_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px'
    },
    standard: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px'
    },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_backendapi"),
    service_sub: t("service_backendapi_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px;'
    },
    standard: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px'
    },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_3d"),
    service_sub: t("service_3d_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px;'
    },
    standard: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px;'
    },
    premium: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px;'
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_adaptive"),
    service_sub: t("service_adaptive_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px;'
    },
    standard: {
          icon: "material-symbols:check-small-rounded",
          style: ''
        },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
  {
    service_name: t("service_animation"),
    service_sub: t("service_animation_sub"),
    basic: {
      icon:"ic:round-minus",
      style: 'color: #6c757d; font-size: 22px'
    },
    standard: {
          icon: "material-symbols:check-small-rounded",
          style: ''
        },
    premium: {
      icon: "material-symbols:check-small-rounded",
      style: ''
    },
    gold: {
      icon: "material-symbols:check-small-rounded",
      style: '',
    }
  },
])
const packageNames = ref<PackageTranslateNamesType>({basic: "service_plan_basic", standard: "service_plan_standard",premium: "service_plan_premium", gold: "service_plan_gold"})
const packagePrices = ref({basic: "$200", standard: "$2000",premium: "$3800+", gold: "$5200+"})
const packegesDetails = ref({basic: "service_details_basic", standard: "service_details_standard",premium: "service_details_premium", gold: "service_details_gold"})
const serviceNumData = ref([
  {
    service_name: t("service_revisions"),
    service_sub: "service_revisions_sub",
    basic: '1',
    standard: "2",
    premium: "5+",
    gold: t("tech_support")
  },
  {
    service_name: t("service_time"),
    service_sub: t("service_time_sub"),
    basic: t('service_time_basic'),
    standard: t("service_time_standard"),
    premium: t("service_time_premium"),
    gold: t("service_time_gold")
  },
])



function selectPackage(packageName: PackageNamesType) {
  selectedPackage.value = packageName
}

</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent ">
      <div class="section-container">
        <div class="text-center px-4">
          <div class="w-fit mx-auto">
            <h6 class="text-3xl dark:text-textLight font-bold mb-2 text-textDark">
              {{ $t('my_service_pricing')}}
            </h6>

            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto mb-4">
              {{$t('service_substring_experience')}}
            </p>

            <p class="dark:text-grayLight text-pDark text-base text-center md:max-w-[74%] mx-auto">
              {{$t('service_substring_cooperation')}}
            </p>

<!--            <DNuxtLink path="/service" :message="$t('hire_me')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">-->
<!--              <Icon name="cib:telegram-plane" class="mr-2" />-->
<!--            </DNuxtLink>-->
          </div>
        </div>
      </div>
    </div>

    <h4 class="text-center mb-6 font-bold text-3xl mt-12">
      {{$t('service_packages')}}
    </h4>

    <div class="xl:hidden flex flex-col max-w-[190px] mx-auto mb-8">
      <button v-for="item in Object.keys(packageNames)" class="my-2 block w-full py-2 text-lg dark:bg-grayDark bg-tbBrClrWhite dark:text-white text-pDark rounded font-bold capitalize transition-all ease-linear duration-200 dark:hover:!bg-primaryDarker" :class="[item === selectedPackage?'!bg-primary !text-white' : '']" @click="selectPackage(<'basic' | 'standard' | 'premium' | 'gold'>item)">
        {{$t(packageNames[item])}}
      </button>
    </div>

    <div class="section-container !py-0 overflow-x-hidden !pb-12">
      <DTable class="max-w-[920px] xl:min-w-[920px] mb-12 w-full mx-auto dark:text-grayLight">
        <template v-slot:thead>
          <tr class="">
            <th></th>
            <th v-for="item in Object.values(packageNames)" class="hidden xl:table-cell" :key="item">
              {{$t(item)}}
            </th>
            <th class="xl:hidden table-cell">
              {{$t(packageNames[selectedPackage])}}
            </th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tr class="">
            <th>{{$t('service_package_price')}}</th>
            <td v-for="item in Object.values(packagePrices)" class="hidden xl:table-cell text-2xl font-bold">{{item}}</td>
            <td class="xl:hidden table-cell text-2xl font-bold">{{packagePrices[selectedPackage]}}</td>
          </tr>


          <tr class="">
            <th>
              {{$t('service_details')}}
            </th>

            <td v-for="item in Object.values(packegesDetails)" class="xl:table-cell hidden text-sm" :key="item">
              {{$t(item)}}
            </td>
            <td class="table-cell xl:hidden text-sm">
              {{$t(packegesDetails[selectedPackage])}}
            </td>
          </tr>
          <tr v-for="serviceItem in servicesData" class="hidden xl:table-row">
            <th>
              <div class="text-sm">
                {{serviceItem.service_name}}
              </div>
              <div class="font-normal text-xs dark:text-graySub">
                {{serviceItem.service_sub}}
              </div>
            </th>
            <td>
              <Icon :name="serviceItem.basic.icon" class="text-3xl text-primary" :style="serviceItem.basic.style" />
            </td>
            <td>
              <Icon :name="serviceItem.standard.icon" class="text-3xl text-primary" :style="serviceItem.standard.style" />
            </td>
            <td>
              <Icon :name="serviceItem.premium.icon" class="text-3xl text-primary" :style="serviceItem.premium.style" />
            </td>
            <td>
              <Icon :name="serviceItem.gold.icon" class="text-3xl text-primary" :style="serviceItem.gold.style" />
            </td>
          </tr>

          <tr v-for="serviceItem in servicesData" class="xl:hidden table-row">
            <th>
              {{serviceItem.service_name}}
            </th>
            <td>
              <Icon :name="serviceItem[selectedPackage]['icon']" class="text-3xl text-primary" :style="serviceItem[selectedPackage]['style']" />
            </td>
          </tr>

          <tr v-for="serviceItem in serviceNumData" class="">
            <th class="">
              {{serviceItem.service_name}}
            </th>
            <td class="hidden xl:table-cell">
              {{serviceItem.basic}}
            </td>
            <td class="hidden xl:table-cell">
              {{serviceItem.standard}}
            </td>
            <td class="hidden xl:table-cell">
              {{serviceItem.premium}}
            </td>
            <td class="hidden xl:table-cell text-sm">
              {{serviceItem.gold}}
            </td>
            <td class="xl:hidden table-cell text-sm">
              {{serviceItem[selectedPackage]}}
            </td>
          </tr>



          <tr class="hidden xl:table-row">
            <td></td>

            <td>
              <DNuxtLink :path="{name: 'contacts', query: {query: 'package'}}" :message="$t('service_book')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              </DNuxtLink>
            </td>
            <td>
              <DNuxtLink :path="{name: 'contacts', query: {query: 'package'}}" :message="$t('service_book')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              </DNuxtLink>
            </td>
            <td>
              <DNuxtLink :path="{name: 'contacts', query: {query: 'package'}}" :message="$t('service_book')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              </DNuxtLink>
            </td>
            <td>
              <DNuxtLink :path="{name: 'contacts', query: {query: 'package'}}" :message="$t('hire_me')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              </DNuxtLink>
            </td>
          </tr>

          <tr class="xl:hidden table-row">
            <td></td>

            <td>
              <DNuxtLink :path="{name: 'contacts', query: {query: 'package'}}" :message="$t('service_book')" class="hire__link hover:!bg-primaryHover bg-primary block w-fit mx-auto px-4" :classes="[linkDefaulClasses]">
              </DNuxtLink>
            </td>
          </tr>

        </template>
      </DTable>

      <div class="">
        <h4 class="text-center text-2xl font-bold mb-6">
          {{$t('faq')}}
        </h4>
        <p class="text-center dark:text-whiteGray mb-12">
          {{$t('faq_sub')}}
        </p>

        <div class="">
          <FaqCard  class="sm:w-3/4 w-full mx-auto" :is-card-open="false" question="faq_question_1" answer="faq_answer_1">
          </FaqCard>
        </div>
      </div>
    </div>


  </div>
</template>
