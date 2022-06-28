tic<template>
    <div class="h-full w-full grid mt-10">
        <form class="form w-[40rem] h-[20rem] rounded place-self-center border border-white p-4" action="">
            <table class="w-full h-full">
                <tbody class="w-full h-full">
                    <tr class="w-full h-[4.5rem] flex items-center">
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="moy" class="block text-sm font-medium text-white">Moy. Générale</label>
                                <input v-model="moy" type="number" min="0" max="20" name="moy" id="moy"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="sb" class="block text-sm font-medium text-white">Sc. Bio</label>
                                <input v-model="sb" type="number" min="0" max="20" name="sb" id="sb"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="sport" class="block text-sm font-medium text-white">Sp-Sport</label>
                                <input v-model="sport" type="number" min="0" max="20" name="sport" id="sport"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                    </tr>
                    <tr class="w-full h-[4.5rem] flex items-center">
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="ep" class="block text-sm font-medium text-white">EP</label>
                                <input v-model="ep" type="number" min="0" max="20" name="ep" id="ep"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="sp" class="block text-sm font-medium text-white">Sc. Physique</label>
                                <input v-model="sp" type="number" min="0" max="20" name="sp" id="sp"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="ph" class="block text-sm font-medium text-white">Philo</label>
                                <input v-model="ph" type="number" min="0" max="20" name="ph" id="ph"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                    </tr>
                    <tr class="w-full h-[4.5rem] flex items-center">
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="fr" class="block text-sm font-medium text-white">Français</label>
                                <input v-model="fr" type="number" min="0" max="20" name="fr" id="fr"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">
                                <label for="ang" class="block text-sm font-medium text-white">Anglais</label>
                                <input v-model="ang" type="number" min="0" max="20" name="ang" id="ang"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </td>
                        
                    </tr>
                    <tr class="w-full h-[4.5rem] flex items-center">
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">

                                <button type="reset"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black font-bold bg-white hover:bg-gray-300 focus:outline-none focus:ring-none focus:ring-offset-0">Annuler</button>
                            </div>
                        </td>
                        <td class="flex-auto grid place-items-center">
                            <div class="w-24">

                                <button type="button" @click="this.calcule()"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black font-bold bg-[#ACB6E5] hover:bg-[#6477ce] focus:outline-none focus:ring-none focus:ring-offset-0">Calculer</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moy: 0,
            sb: 0,
            sport: 0,
            ep: 0,
            ph: 0,
            sp: 0,
            fr: 0,
            ang: 0,
            formuleGenerale: 0
        }
    },
    methods: {
        calcule() {
            this.formuleGenerale = (4 * this.moy) + (1.5 * this.sb) + this.sport + (0.5 * this.ep) + (0.5 * this.sp) + (0.5 * this.ph) + this.fr + this.ang
            this.$emit("formule-generale", this.formuleGenerale);
        }
    }
}
</script>