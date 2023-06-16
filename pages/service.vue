<script setup lang="ts">

import {linkDefaulClasses} from "~/constants/UI/DNuxtLink";
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
  standard: string
  premium: string
  gold: string
}

const serviceData = ref<ServiceType[]>([
  {
    service_name: "service_frontend",
    service_sub: "service_frontend_sub",
    basic: {
      icon:"material-symbols:check-small-rounded",
      style: ''
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_backend",
    service_sub: "service_backend_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_spa",
    service_sub: "service_spa_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_backendapi",
    service_sub: "service_backendapi_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_3d",
    service_sub: "service_3d_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_adaptive",
    service_sub: "service_adaptive_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
  {
    service_name: "service_animation",
    service_sub: "service_animation_sub",
    basic: {
      icon:"ic:round-minus",
      style: 'color: #dc2626;'
    },
    standard: "material-symbols:check-small-rounded",
    premium: "material-symbols:check-small-rounded",
    gold: "material-symbols:check-small-rounded"
  },
])

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
</script>

<template>
  <div class="">
    <div class="section-bottom__border bg-[#fafafa] dark:bg-transparent">
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

    <div class="section-container py-12">
      <DTable class="max-w-[920px] mx-auto">
        <template v-slot:thead>
          <tr>
            <th></th>
            <th>{{$t("service_plan_basic")}}</th>
            <th>{{$t("service_plan_standard")}}</th>
            <th>{{$t("service_plan_premium")}}</th>
            <th>{{$t("service_plan_gold")}}</th>
          </tr>
        </template>
        <template v-slot:tbody>
          <tr>
            <th>{{$t('service_package_price')}}</th>
            <td>$200</td>
            <td>$2000</td>
            <td>$3800+</td>
            <td>$5200+</td>
          </tr>
          <tr>
            <th>
              {{$t('service_details')}}
            </th>
            <td>
              {{$t('service_details_basic')}}
            </td>
            <td>
              {{$t('service_details_standard')}}
            </td>
            <td>
              {{$t('service_details_premium')}}
            </td>
            <td>
              {{$t('service_details_gold')}}
            </td>
          </tr>
          <tr v-for="serviceItem in serviceData">
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
              <Icon :name="serviceItem.standard" class="text-3xl text-primary" />
            </td>
            <td>
              <Icon :name="serviceItem.premium" class="text-3xl text-primary" />
            </td>
            <td>
              <Icon :name="serviceItem.gold" class="text-3xl text-primary" />
            </td>
          </tr>

          <tr v-for="serviceItem in serviceNumData">
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

          <tr>
            <th></th>

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
        </template>
      </DTable>
    </div>
  </div>
</template>
