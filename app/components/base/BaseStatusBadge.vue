<template>
  <span :class="clases">
    {{ texto }}
  </span>
</template>

<script setup lang="ts">
import {
  getActiveStatusLabel,
  getProfileLabel,
  getRentalStatusLabel,
  getStatusClasses,
  getVehicleStatusLabel,
} from '~/utils/formatStyle'

type EstadoBadge =
  | 'activo'
  | 'inactivo'
  | 'disponible'
  | 'arrendado'
  | 'en_mantenimiento'
  | 'de_baja'
  | 'vigente'
  | 'finalizado'
  | 'admin'
  | 'administrador'
  | 'ejecutivo'

const props = defineProps<{
  label?: string
  estado?: string
  tipo?: EstadoBadge
}>()

const tipoNormalizado = computed(() => props.tipo ?? props.estado ?? 'inactivo')

const texto = computed(() => {
  if (props.label) {
    return props.label
  }

  if (tipoNormalizado.value === 'activo') {
    return getActiveStatusLabel(true)
  }

  if (tipoNormalizado.value === 'inactivo') {
    return getActiveStatusLabel(false)
  }

  if (['disponible', 'arrendado', 'en_mantenimiento', 'de_baja'].includes(tipoNormalizado.value)) {
    return getVehicleStatusLabel(tipoNormalizado.value)
  }

  if (['vigente', 'finalizado'].includes(tipoNormalizado.value)) {
    return getRentalStatusLabel(tipoNormalizado.value)
  }

  return getProfileLabel(tipoNormalizado.value)
})

const clases = computed(() => getStatusClasses(tipoNormalizado.value))
</script>
