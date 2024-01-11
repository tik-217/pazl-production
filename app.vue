<template>
  <div class="app">
    <div class="models">
      <a-list item-layout="horizontal" :data-source="models.models">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card
              title="Name:"
              class="models__name"
              data-type="name"
              @click="
                (e) => clickOnModel(e, item.server_name, item.customer_id)
              "
              >{{ item.server_name }}</a-card
            >
            <a-card
              title="Type:"
              class="models__type"
              data-type="type"
              @click="
                (e) => clickOnModel(e, item.server_type, item.customer_id)
              "
              >{{ item.server_type }}</a-card
            >
          </a-list-item>
        </template>
      </a-list>
    </div>
    <div class="editing">
      <client-only>
        <h4>
          {{ modelTypeTitle.length === 0 ? "" : `${modelTypeTitle} -` }}
          {{ oldModel }}
        </h4>
        <a-form layout="inline" :model="formState" @finish="handleFinish">
          <a-form-item>
            <a-input
              v-model:value="formState.server"
              placeholder="Choose model"
              :disabled="modelTypeTitle.length === 0 ?? false"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">Edit</a-button>
          </a-form-item>
        </a-form>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue
import { reactive } from "vue";
import type { UnwrapRef } from "vue";

// antd
import type { FormProps } from "ant-design-vue";

// types
import type { FormState } from "./types";

// states
const models = reactive({
  models: [
    {
      customer_id: "",
      server_name: "",
      server_type: "",
    },
  ],
});

const modelTypeTitle = ref("");

const oldModel = ref("");

const formState: UnwrapRef<FormState> = reactive({
  server: "",
  modelId: "",
});

// lifecycle
onMounted(async () => {
  models.models = await $fetch("/api/data");
});

// handlers
function clickOnModel(e: Event, modelName: string, modelId: string) {
  const type = (e.currentTarget as HTMLDivElement).dataset.type;

  modelTypeTitle.value = type ? type : "";

  formState.modelId = modelId;
  formState.server = modelName;

  oldModel.value = modelName;
}

const handleFinish: FormProps["onFinish"] = async (values) => {
  const server = `server_${modelTypeTitle.value}`;

  models.models = await $fetch("/api/data", {
    method: "POST",
    body: {
      customer_id: formState.modelId,
      [server]: formState.server,
    },
  });
};
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;

  margin-top: 40px;
}

.models {
  margin-right: 40px;

  &__name {
    cursor: pointer;
  }

  &__type {
    cursor: pointer;
  }
}

.editing {
  max-width: 300px;
}
</style>
./types
