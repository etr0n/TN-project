import { defineStore } from 'pinia'
import { originList } from '../utils/listData'

export const useMultiListsStore = defineStore("MultiSelectListsStore", {
    state: () => {
        return {
            originList: [],
            targetList: [],
            selectedItemsOrigin: [],
            selectedItemsTarget: [],
            searchOrigin: "",
            searchTarget: "",
        };
    },
    actions: {
        fill() {
            this.originList = originList;
        },
        clearSearch() {
            this.searchOrigin = "";
            this.searchTarget = "";
        },
        moveAllTo(toList, fromList, selectedItemsList) {
            toList.push(...fromList);
            fromList.length = 0;
            selectedItemsList.length = 0;
            this.clearSearch();
        },
        moveAllToTargetList() {
            this.moveAllTo(this.targetList, this.originList, this.selectedItemsOrigin);
        },
        moveAllToOriginList() {
            this.moveAllTo(this.originList, this.targetList, this.selectedItemsTarget);
        },
        moveSelected(fromList, toList, selectedItemsList) {
            const filtered = fromList.filter(l => !selectedItemsList.find(s => (s.label === l.label && s.id === l.id)));
            fromList.length = 0;
            fromList.push(...filtered);
            toList.push(...selectedItemsList);
            selectedItemsList.length = 0;
            this.clearSearch();
        },
        moveSelectedToTargetList() {
            this.moveSelected(this.originList, this.targetList, this.selectedItemsOrigin);
        },
        moveSelectedToOriginList() {
            this.moveSelected(this.targetList, this.originList, this.selectedItemsTarget);
        },
        selectAll(fromList, selectedList) {
            if (selectedList.length !== fromList.length) {
                selectedList.push(...fromList)
            }
        },
        selectOriginList() {
            this.selectAll(this.originList, this.selectedItemsOrigin)
        },
        selectTargetList() {
            this.selectAll(this.targetList, this.selectedItemsTarget)
        },
        deselectAll(list) {
            list.length = 0;
        },
        deselectOriginList() {
            this.deselectAll(this.selectedItemsOrigin)
        },
        deselectTargetList() {
            this.deselectAll(this.selectedItemsTarget)
        },
        selectItemsById(id, selectedList, list) {
            if (selectedList.find(i => i.id === id) === undefined) {
                selectedList.push(list.find(i => i.id === id));
            }
            else {
                const filtered = selectedList.filter(i => i.id !== id)
                selectedList.length = 0;
                selectedList.push(...filtered);
            }
        },
        selectItemsOrigin(id) {
            this.selectItemsById(id, this.selectedItemsOrigin, this.originList);
        },
        selectItemsTarget(id) {
            this.selectItemsById(id, this.selectedItemsTarget, this.targetList);
        },
    },
    getters: {
        originListFilter() {
            if (this.searchOrigin.trim().length > 0) {
                return this.originList.filter((item) => item.label.toLowerCase().includes(
                    this.searchOrigin.trim().toLowerCase()
                ))
            }
            return this.originList
        },
        targetListFilter() {
            if (this.searchTarget.trim().length > 0) {
                return this.targetList.filter((item) => item.label.toLowerCase().includes(
                    this.searchTarget.trim().toLowerCase()
                ))
            }
            return this.targetList
        }
    },
})