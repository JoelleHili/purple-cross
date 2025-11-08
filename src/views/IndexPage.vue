<script setup lang="ts">
import { ref } from "vue";

const uploadedData = ref<any[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const onUpload = async (): Promise<void> => {
  if ("showOpenFilePicker" in window) {
    try {
      const [handle] = await (window as any).showOpenFilePicker({
        types: [
          {
            description: "JSON Files",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      const file = await handle.getFile();
      const text = await file.text();
      const parsed = JSON.parse(text);
      uploadedData.value = Array.isArray(parsed) ? parsed : [parsed];
      return;
    } catch (err) {
      console.warn("File picker cancelled or invalid JSON", err);
      return;
    }
  }
  inputRef.value?.click();
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target?.result as string);
      uploadedData.value = Array.isArray(parsed) ? parsed : [parsed];
    } catch (err) {
      console.error("Invalid JSON file", err);
    }
  };
  reader.readAsText(file);
  target.value = "";

  console.log(uploadedData)
};
</script>

<template>
  <section class="page">
    <button @click="onUpload" class="elevated">Import File</button>

    <input
      ref="inputRef"
      type="file"
      accept="application/json"
      hidden
      @change="onFileChange"
    />
  </section>
</template>
