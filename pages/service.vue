<script setup lang="ts">

import {btnDefaultClasses, linkDefaulClasses} from "~/constants/UI/DNuxtLink";
import DNuxtLink from "~/components/UI/DNuxtLink.vue";
import {useI18n} from "#imports";
import DTable from "~/components/UI/DTable.vue";


const {locale} = useI18n()

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


const selectedPackage = ref<PackageNamesType>('basic')
const servicesData = ref<ServiceType[]>([
  {
    service_name: "service_frontend",
    service_sub: "service_frontend_sub",
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
    service_name: "service_backend",
    service_sub: "service_backend_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
    service_name: "service_spa",
    service_sub: "service_spa_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
    service_name: "service_backendapi",
    service_sub: "service_backendapi_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
    service_name: "service_3d",
    service_sub: "service_3d_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
    service_name: "service_adaptive",
    service_sub: "service_adaptive_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
    service_name: "service_animation",
    service_sub: "service_animation_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
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
const packageNames = ref({basic: "service_plan_basic", standard: "service_plan_standard",premium: "service_plan_premium", gold: "service_plan_gold"})
const packagePrices = ref({basic: "$200", standard: "$2000",premium: "$3800+", gold: "$5200+"})
const packegesDetails = ref({basic: "service_details_basic", standard: "service_details_standard",premium: "service_details_premium", gold: "service_details_gold"})
const serviceNumData = ref([
  {
    service_name: "service_revisions",
    service_sub: "service_revisions_sub",
    basic: '1',
    standard: "2",
    premium: "5+",
    gold: "tech_support"
  },
  {
    service_name: "service_time",
    service_sub: "service_time_sub",
    basic: 'service_time_basic',
    standard: "service_time_standard",
    premium: "service_time_premium",
    gold: "service_time_gold"
  },
])



function selectPackage(packageName: PackageNamesType) {
  selectedPackage.value = packageName
}

</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent mb-6">
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

    <div class="xl:hidden flex flex-col max-w-[240px] mx-auto">
      <button class="my-2 block w-full p-1 bg-primary rounded font-semibold capitalize" @click="selectPackage('basic')">
        basic
      </button>
      <button class="my-2 block w-full p-1 bg-primary rounded font-semibold capitalize" @click="selectPackage('standard')">
        standard
      </button>
      <button class="my-2 block w-full p-1 bg-primary rounded font-semibold capitalize" @click="selectPackage('premium')">
        premium
      </button>
      <button class="my-2 block w-full p-1 bg-primary rounded font-semibold capitalize" @click="selectPackage('gold')">
        gold
      </button>
    </div>

    <div class="section-container py-12">
      <DTable class="max-w-[920px] xl:min-w-[920px] w-full mx-auto dark:text-grayLight">
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

            <td v-for="item in Object.values(packegesDetails)" class="xl:table-cell hidden" :key="item">
              {{$t(item)}}
            </td>
            <td class="table-cell xl:hidden">
              {{$t(packegesDetails[selectedPackage])}}
            </td>
          </tr>
          <tr v-for="serviceItem in servicesData" class="hidden xl:table-row">
            <th>
              <div class="">
                {{serviceItem.service_name}}
              </div>
              <div class="">
                {{serviceItem.service_sub}}
              </div>
            </th>
            <td>
              <Icon :name="serviceItem.basic.icon" class="text-3xl text-primary" :style="serviceItem.basic.style" />
            </td>
            <td>
              <Icon :name="serviceItem.standard.icon" class="text-3xl text-primary" />
            </td>
            <td>
              <Icon :name="serviceItem.premium.icon" class="text-3xl text-primary" />
            </td>
            <td>
              <Icon :name="serviceItem.gold.icon" class="text-3xl text-primary" />
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

          <tr v-for="serviceItem in serviceNumData" class="hidden xl:table-row">
            <th>
              {{serviceItem.service_name}}
            </th>
            <td>
              {{serviceItem.basic}}
            </td>
            <td>
              {{serviceItem.standard}}
            </td>
            <td>
              {{serviceItem.premium}}
            </td>
            <td>
              {{serviceItem.gold}}
            </td>
          </tr>

          <tr v-for="serviceItem in serviceNumData" :key="serviceItem.service_sub" class="xl:hidden table-row">
            <th>
              {{serviceItem.service_name}}
            </th>
            <td>
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
    </div>
  </div>
</template>
