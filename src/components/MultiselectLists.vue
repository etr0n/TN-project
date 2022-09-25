<script setup>
import { useMultiListsStore } from '../stores/MultiSelectListsStore';

const multiSelectListsStore = useMultiListsStore();
multiSelectListsStore.fill();
</script>

<template>
        <div class="sm:basis-96">
            <label class="relative block">
                <input autocomplete="off" v-model="multiSelectListsStore.searchOrigin"
                    class=" placeholder:text-slate-400 block bg-white w-full py-3 pr-3 pl-3 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search" type="text" name="search" />
            </label>
            <div class="border overflow-y-auto	xs:h-52 sm:h-80">
                <ul v-if="multiSelectListsStore.originListFilter.length"
                    class="list-none divide-y last:border-b first:border-t-0 text-center">
                    <li v-for="(item) in multiSelectListsStore.originListFilter" :key="item.id"
                        @click="multiSelectListsStore.selectItemsOrigin(item.id)" class="p-3 cursor-default"
                        :class="{'selected bg-blue-500/30': multiSelectListsStore.selectedItemsOrigin.includes(item)}">
                        {{item.label}}
                    </li>
                </ul>
                <span v-else class="py-3 pr-3 pl-3">No items</span>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2"
                @click="multiSelectListsStore.selectOriginList">Select All</button>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/2"
                @click="multiSelectListsStore.deselectOriginList">None</button>
        </div>
        <div class="flex xs:flex-row justify-center sm:flex-col shrink-0 basis-2 gap-3 py-8">
            <button @click="multiSelectListsStore.moveAllToTargetList"
                class=" bg-blue-500 hover:bg-blue-700 text-white rounded font-bold py-2 px-2 xs:origin-center rotate-90 sm:transform-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button @click="multiSelectListsStore.moveSelectedToTargetList"
                class="bg-gray-500 hover:bg-gray-700 text-white rounded font-bold py-2 px-2 xs:origin-center rotate-90 sm:transform-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button @click="multiSelectListsStore.moveSelectedToOriginList"
                class="bg-gray-500 hover:bg-gray-700 text-white rounded font-bold py-2 px-2 xs:origin-center rotate-90 sm:transform-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button @click="multiSelectListsStore.moveAllToOriginList"
                class="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold py-2 px-2 xs:origin-center rotate-90 sm:transform-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
        <div class="sm:basis-96">
            <label class="relative block">
                <span class="sr-only">Search</span>
                <input autocomplete="off" v-model="multiSelectListsStore.searchTarget"
                    class=" placeholder:text-slate-400 block bg-white w-full py-3 pr-3 pl-3 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search" type="text" name="search" />
            </label>
            <div class="border overflow-y-auto	xs:h-52 sm:h-80">
                <ul v-if="multiSelectListsStore.targetListFilter.length"
                    class="list-none divide-y last:border-b first:border-t-0 text-center">
                    <li v-for="(item) in multiSelectListsStore.targetListFilter" :key="item.id"
                        @click="multiSelectListsStore.selectItemsTarget(item.id)" class="p-3 cursor-default"
                        :class="{'selected bg-blue-500/30': multiSelectListsStore.selectedItemsTarget.includes(item)}">
                        {{item.label}}
                    </li>
                </ul>
                <span v-else class="py-3 pr-3 pl-3">No items</span>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2"
                @click="multiSelectListsStore.selectTargetList">Select All</button>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-1/2"
                @click="multiSelectListsStore.deselectTargetList">None</button>
        </div>
</template>
